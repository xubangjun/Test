import { Route, Routes } from "react-router-dom";
import TopHeader from "../../components/sandbox/TopHeader";
import Content from "./Content";
import "./NewsSandBox.css";
function NewsSandBox() {
    return(
        <div className="news-sandbox">
            <TopHeader></TopHeader>

            <Routes>
                <Route path="home" element={<Content />} />
            </Routes>
        </div>
    )
}

export default NewsSandBox;