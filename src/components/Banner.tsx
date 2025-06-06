import React, { useEffect, useState } from "react";
import { Box, Button, styled, useMediaQuery, useTheme } from "@mui/material";

const BlurredContainer = styled(Box)`
  position: relative;
  height: 100vh;
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
  overflow: hidden;

  @media (max-width: 600px) {
    height: 100dvh; /* dynamic viewport height for mobile */
    font-size: 32px;
  }
`;

const BlurOverlay = styled(Box)<{
  $isMobile: boolean;
  $initialAnimation: boolean;
}>`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(8px);
  pointer-events: none;
  z-index: 1;
  mask: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    transparent 150px,
    black 150px
  );

  @media (max-width: 600px) {
    mask: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      transparent 80px,
      black 80px
    );
  }

  ${({ $isMobile, $initialAnimation }) =>
    $isMobile &&
    $initialAnimation &&
    `
    animation: cornerToCorner 2s ease-in-out forwards;

    @keyframes cornerToCorner {
      0% {
        --mouse-x: 0%;
        --mouse-y: 0%;
      }
      25% {
        --mouse-x: 100%;
        --mouse-y: 0%;
      }
      50% {
        --mouse-x: 100%;
        --mouse-y: 100%;
      }
      75% {
        --mouse-x: 0%;
        --mouse-y: 100%;
      }
      100% {
        --mouse-x: 50%;
        --mouse-y: 50%;
      }
    }
  `}
`;

const ContentWrapper = styled(Box)`
  padding: 20px;
  text-align: center;
`;

const Banner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    // Prevent scroll on mount
    if (isMobile) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const updateMousePosition = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty("--mouse-x", `${x}%`);
        document.documentElement.style.setProperty("--mouse-y", `${y}%`);
      };

      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    } else {
      const updateTouchPosition = (e: TouchEvent) => {
        const touch = e.touches[0];
        if (touch) {
          const x = (touch.clientX / window.innerWidth) * 100;
          const y = (touch.clientY / window.innerHeight) * 100;
          document.documentElement.style.setProperty("--mouse-x", `${x}%`);
          document.documentElement.style.setProperty("--mouse-y", `${y}%`);
        }
      };

      window.addEventListener("touchmove", updateTouchPosition);

      // Reset initial animation after it completes
      const timer = setTimeout(() => {
        setInitialAnimation(false);
      }, 2000);

      return () => {
        window.removeEventListener("touchmove", updateTouchPosition);
        clearTimeout(timer);
      };
    }
  }, [isMobile]);

  return (
    <BlurredContainer>
      <BlurOverlay $isMobile={isMobile} $initialAnimation={initialAnimation} />
      <ContentWrapper>
        <Button>qwewq</Button>
        <Box mt={2}>Sample Text Content</Box>
      </ContentWrapper>
    </BlurredContainer>
  );
};

export default Banner;
