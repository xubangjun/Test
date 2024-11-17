import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NewsSandBox from "../view/sandbox/NewsSandBox";
const IndexRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Wrap all Route elements inside a Routes component */}
        <Route path="/main*" element ={<NewsSandBox/>}/>
      </Routes>
    </HashRouter>
  );
};

export default IndexRouter;
