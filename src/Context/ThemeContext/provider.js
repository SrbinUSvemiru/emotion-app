import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import {  useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getStorageItem, setStorageItem } from '../../Utils/Utils';
import { getPaletteForTheme } from './utils'

export const AppThemeProvider = (props) => {

    const [theme, setTheme] = useState({variant: 'default', mode: 'dark'})

    useEffect(() => {
	const theme = getStorageItem('emotion-app', 
        {theme: { variant: 'default', mode: 'dark' }})
        setTheme(theme?.theme)
        setStorageItem('emotion-app', {theme: theme?.theme})
    }, [])


    useEffect(() => {
        window.addEventListener('storage', (event) => {
            const {newValue} = event?.detail;
            setTheme({...newValue?.theme})
        })
      }, []);
    

	const selectedTheme = useMemo(
		() =>
			createTheme({
				palette: {
					mode:  theme?.mode,
					...getPaletteForTheme(theme),
				},
				components: {
					MuiCssBaseline: {
						styleOverrides: {
							body: {
								'&::-webkit-scrollbar': {
									width: '8px', // Scrollbar width
								},
								'&::-webkit-scrollbar-track': {
									backgroundColor: '#2b2e3b', // Track color
								},
								'&::-webkit-scrollbar-thumb': {
									backgroundColor: '#888',
									borderRadius: '10px',
								},
								'&::-webkit-scrollbar-thumb:hover': {
									backgroundColor: '#555',
								},
							},
						},
					},
				},
				typography: {
					fontFamily: `"Helvetica Neue", "Arial", sans-serif`,
				},
			}),
		[theme],
	);

	return (
		<ThemeProvider theme={selectedTheme}>
			<CssBaseline />
			<StyledThemeProvider theme={selectedTheme}>{props.children}</StyledThemeProvider>
		</ThemeProvider>
	);
};