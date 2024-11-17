import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NewsSandBox from "../view/sandbox/test";
const IndexRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Wrap all Route elements inside a Routes component */}
        {/* <Route path="/" element={<NewsSandBox />} /> */}
        <Route path="/" element ={<NewsSandBox/>}/>
      </Routes>
    </HashRouter>
  );
};

export default IndexRouter;
