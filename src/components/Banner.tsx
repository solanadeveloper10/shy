import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { HEADER_HEIGHT } from "../constants";
import { theme } from "../theme";

const Banner: React.FC = () => (
  <Box
    position='relative'
    display='flex'
    alignItems='center'
    minHeight={`calc(100vh - ${HEADER_HEIGHT}px)`}
  >
    <Container sx={{ zIndex: 1 }}>
      {["Your AI-Powered", "Trading", "Companion -"].map((label) => (
        <>
          <Typography
            component='span'
            variant='h3'
            color='white'
            position='relative'
            display='inline'
          >
            {label}
            <Box
              position='absolute'
              width='100%'
              height='100%'
              left={0}
              top={0}
              sx={{
                opacity: 0,
                filter: "blur(24px)",
                background: theme.palette.primary.main,
                textShadow: "0 0 1px rgba(255,255,255,.1)",
                ":hover": {
                  opacity: 0.5,
                },
                transition: "0.3s",
              }}
            ></Box>
          </Typography>
          <br />
        </>
      ))}
    </Container>

    <Box
      maxWidth={{ xs: "100%", md: "50%" }}
      height='100%'
      position='absolute'
      style={{
        objectFit: "cover",
      }}
      top={0}
      right={0}
      component='img'
      src='/13.png'
    />
    <Box
      maxWidth={{ xs: "100%", md: "50%" }}
      height='100%'
      position='absolute'
      style={{
        objectFit: "contain",
      }}
      top={{ xs: "30%", md: "10%" }}
      right={0}
      component='img'
      src='/12.png'
    />
  </Box>
);

export default Banner;
