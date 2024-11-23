import { Navigate, Route, Routes } from "react-router-dom";
import TopHeader from "../../components/sandbox/TopHeader";
import "./NewsSandBox.css";
import Home from "../../components/home/Home";
import { useState } from "react";
function NewsSandBox() {
    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    return(
        <div className="news-sandbox">
            <TopHeader open={open} toggleDrawer={toggleDrawer}></TopHeader>

            <Routes>
                <Route path="/home" element={<Home open={open} toggleDrawer={toggleDrawer}/>} />
                 {/* Set default redirection */}
                <Route path="/" element={<Navigate to="/main" replace />} />
            </Routes>
        </div>
    )
}

export default NewsSandBox;