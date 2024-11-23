import "./Content.css";
function Content() {
  return(
      <div>
        <div>
          <div className="head-box">
          <img src="images/2.jpeg" alt="son" style={{ width: '300px', height: 'auto' }} />
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