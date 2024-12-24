import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {

  useTransition,
} from "react-spring";
import { Wrapper } from "./styled-components";
import HeroPage from "./Components/HeroPage/HeroPage";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import { getStorageItem, setStorageItem } from "./Utils/Utils";
import "./index.css";

function App() {
  
  const location = useLocation();

  
  

  const transition = useTransition(location?.pathname, {
    from: { opacity: 0, transform: "translate(0%,100%)" },
    enter: { opacity: 1, transform: "translate(0%, 0%)" },
    leave: { opacity: 0 },
  });

  const handleEndtagClick = () => {
    const theme = getStorageItem("emotion-app", {theme: {variant: "default", mode: "dark"}});
     setStorageItem("emotion-app", {theme: {variant: 'default', mode: theme?.theme?.mode === 'dark' ? 'light' : 'dark'}} )
     const event = new CustomEvent("storage", {
       detail: {
         key: "emotion-app", 
         oldValue: null, 
         newValue: {theme: {variant: 'default', mode: theme?.theme?.mode === 'dark' ? 'light' : 'dark'}},
         url: window.location.href 
       }
     });
     
     window.dispatchEvent(event);
   }

  return (
    <div className="App">
      {transition((style, item) => (
        <Wrapper key={item} style={style}>
          <Routes location={item}>
            <Route path="/" element={<HeroPage handleEndtagClick={handleEndtagClick}/>} />
            <Route path="/work" element={<Work handleEndtagClick={handleEndtagClick} />} />
            <Route path="/about" element={<About handleEndtagClick={handleEndtagClick} />} />
          </Routes>
        </Wrapper>
      ))}
    </div>
  );
}

export default App;
