
import React from "react";
import { Container, Typography } from "@mui/material";

const Section: React.FC = () => (
  <Container sx={{ py: 8 }}>
    <Typography variant="h4" gutterBottom>
      About This Template
    </Typography>
    <Typography variant="body1">
      This project is configured with Material UI, TypeScript, ESLint, and a design system you can customize.
    </Typography>
  </Container>
);

export default Section;
