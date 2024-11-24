
import MyPie from "../../components/chart/MyPie";
import MyPie2 from "../../components/chart/MyPie2";
import "./Content.css";

function Content() {
  return(
      <div>
        <div>
          <div className="head-box">
            <MyPie></MyPie>
            <MyPie2></MyPie2>
          </div>
        </div>
        <div>
        <video controls style={{ width: "100%", marginTop: "20px" }}>
          <source src={"images/videoplayback.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
  )
}

export default Content;

