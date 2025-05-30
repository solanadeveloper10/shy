import React from "react";
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import { theme } from "./theme";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { HEADER_HEIGHT } from "./constants";
import InfoBlock from "./components/InfoBlock";
import VideoBlock from "./components/VideoBlock";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import { Autoplay } from "./components/Autoplay";
import HowItWorks from "./components/HowItWorks";
import AccordionsBlock from "./components/AccordionsBlock";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Header />
    <Box mt={`${HEADER_HEIGHT}px`}>
      <Banner />
    </Box>

    <InfoBlock />
    <Container maxWidth='xl'>
      <Box mt={8}>
        <AboutUs />
      </Box>

      <Box mt={8}>
        <VideoBlock />
      </Box>

      <Box mt={8}>
        <Projects />
      </Box>
      <Box mt={8}>
        <Autoplay />
      </Box>

      <Box mt={8}>
        <HowItWorks />
      </Box>
    </Container>
    <Box mt={8}>
      <AccordionsBlock />
    </Box>
    <Footer />
  </ThemeProvider>
);

export default App;
