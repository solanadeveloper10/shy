import React from "react";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const VideoBlock: React.FC = () => (
  <Box>
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", md: "70%" },
        margin: "auto auto",
        aspectRatio: "16 / 9",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <ReactPlayer
        url='/hypeup.mp4'
        muted
        controls={true}
        width='100%'
        height='100%'
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </Box>
  </Box>
);

export default VideoBlock;
