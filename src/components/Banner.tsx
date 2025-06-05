import React, { useEffect } from "react";
import { Box, Button, styled } from "@mui/material";

const BlurredContainer = styled(Box)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url("/image1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const BlurOverlay = styled(Box)`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(8px);
  mask: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    transparent 150px,
    black 150px
  );
  pointer-events: none;
  z-index: 1;
`;

const Banner: React.FC = () => {
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <BlurredContainer>
      <BlurOverlay />
      <Box>
        <Button>qwewq</Button>
      </Box>
      Sample Text Content
    </BlurredContainer>
  );
};

export default Banner;
