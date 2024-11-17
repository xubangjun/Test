import { Route, Routes } from "react-router-dom";
// import TopHeader from "../../components/sandbox/TopHeader";
import Content from "./Content";
function NewsSandBox() {
    return(
        <div>
            {/* <TopHeader></TopHeader> */}
            <Content />
            <Routes>
                <Route path="home" element={<Content />} />
            </Routes>
        </div>
    )
}

export default NewsSandBox;