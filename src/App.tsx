import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import Banner from "./components/Banner";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Box>
      <Banner />
    </Box>
  </ThemeProvider>
);

export default App;
