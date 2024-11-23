import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import NewsSandBox from "../view/sandbox/NewsSandBox";
import { Home } from "@mui/icons-material";
const IndexRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Wrap all Route elements inside a Routes component */}
        <Route path="/main*" element ={<NewsSandBox/>}/>
                           {/* Optional: Handle unmatched routes */}
        <Route path="*" element={<NewsSandBox />} />
      </Routes>
    </HashRouter>
  );
};

export default IndexRouter;
