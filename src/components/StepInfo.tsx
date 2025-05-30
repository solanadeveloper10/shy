import { Box, keyframes, Typography } from "@mui/material";
import type { FC } from "react";
import { useInView } from "react-intersection-observer";

const StepInfo: FC<{
  title: string;
  description: string;
  isLeft?: boolean;
  src: string;
}> = ({ title, description, isLeft = false, src }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const lineGrow = keyframes`
  0% {
    opacity: 0;
    transform: ${isLeft ? "translateX(200px)" : "translateX(-200px)"};
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

  return (
    <Box
      ref={ref}
      sx={{
        "&:hover": {
          "& img": {
            transform: "scale(1.05)",
          },
        },
        animation: inView ? `${lineGrow} 1.5s forwards` : "none",
      }}
    >
      <Box display='flex' justifyContent={isLeft ? "end" : "start"}>
        <Box maxWidth={{ md: "50%" }}>
          <Typography variant='h4' color='primary.main' mb={3}>
            {title}
          </Typography>
          <Typography variant='body1' color='#fff' mb={4}>
            {description}
          </Typography>
          <Box
            sx={{
              height: 4,
              borderRadius: 1,
              backgroundColor: "primary.main",
              width: 64,
            }}
          />
        </Box>
      </Box>
      <Box display='flex' justifyContent={isLeft ? "start" : "end"} mt={3}>
        <Box height={{ md: 600 }} overflow='hidden'>
          <Box
            height={{ md: 600 }}
            width={{ xs: "100%", md: "unset" }}
            component='img'
            src={src}
            alt='step-info'
            sx={{
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StepInfo;
