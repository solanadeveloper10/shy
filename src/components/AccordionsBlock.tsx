import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accordionData = [
  {
    title: "Real-Time Market Insights",
    content:
      "Get instant access to market analysis and trading opportunities as they happen. Our AI-powered platform processes vast amounts of data to deliver actionable insights in real-time.",
  },
  {
    title: "Custom Charting & Indicators",
    content:
      "Personalize your trading experience with customizable charts and technical indicators. Track the metrics that matter most to your trading strategy.",
  },
  {
    title: "Multi-Level Analysis",
    content:
      "Not everyone is a pro trader. That's why SPLAT adapts to your skill level: Easy Mode - Simplified, beginner-friendly insights. Advanced Mode - Deeper analysis with clear explanations. Expert Mode - Raw, technical breakdowns for serious traders.",
  },
];

const AccordionsBlock: React.FC = () => (
  <Box sx={{ backgroundColor: "background.paper" }} py={{ xs: 4, md: 10 }}>
    <Container>
      <Box display='flex' flexDirection={{ xs: "column" }} gap={5}>
        <Box display='flex' flexDirection={{ xs: "column", md: "row" }} gap={5}>
          <Box>
            <Typography variant='h3' mb={3} fontWeight='bold'>
              What makes HypeUp Different
            </Typography>
            <Typography variant='body1' mb={3}>
              We're not just another crypto analysis platform. We're a community
              of traders who are passionate about the future of finance.
            </Typography>
            <Box component='img' src='/image1.png' width={300} height={300} />
          </Box>
          <Box mt={{ md: 20 }}>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                slotProps={{
                  root: {
                    sx: {
                      borderRadius: 0,
                      boxShadow: "none",
                      "&& .MuiAccordionSummary-content": {
                        my: 3,
                      },
                    },
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant='h6'>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default AccordionsBlock;
