import { Box, keyframes } from "@mui/material";
import type { FC } from "react";
import { useInView } from "react-intersection-observer";

const lineGrow = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const StepContainer: FC<{
  step: number;
}> = ({ step }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        width: "100%",
        fontSize: { xs: 150, md: 220 },
        color: "primary.main",
        fontWeight: 700,
        opacity: inView ? 0.6 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s, transform 0.6s",
        ":after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "30%",
          height: "3px",
          backgroundColor: "primary.main",
          transformOrigin: "left",
          animation: inView ? `${lineGrow} 1.5s forwards .8s` : "none",
        },
      }}
    >
      {step}
    </Box>
  );
};

export default StepContainer;
