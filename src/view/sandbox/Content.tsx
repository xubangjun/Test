import { Box } from '@mui/material';
import * as React from 'react';
function Content() {
  return(
      <Box>
        <Box>
          <img src="images/2.jpeg" alt="son" style={{ width: '300px', height: 'auto' }} />
        </Box>
        <div>
        <video controls style={{ width: "100%", marginTop: "20px" }}>
          <source src={"images/videoplayback.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        
        <Box>
          123
        </Box>
      </Box>
  )
}

export default Content;