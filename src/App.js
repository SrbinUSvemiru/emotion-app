import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  useSpring,
  useSpringRef,
  useChain,
  config,
  easings,
  animated,
  useTransition,
} from "react-spring";
import { Wrapper } from "./styled-components";
import HeroPage from "./Components/HeroPage/HeroPage";
import Work from "./Components/Work/Work";
import "./index.css";

function App() {
  const [pathName, setPathName] = useState();
  const location = useLocation();

  useEffect(() => {
    setPathName(location.pathname);
    console.log("set");
  }, [location]);

  const transition = useTransition(location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });

  return (
    <div className="App">
      {transition((style, item) => (
        <Wrapper key={item} style={style}>
          <Routes location={item}>
            <Route path="/" element={<HeroPage />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Wrapper>
      ))}
    </div>
  );
}

export default App;
