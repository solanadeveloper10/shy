import { Box, Typography } from "@mui/material";
import StepContainer from "./StepContainer";
import StepInfo from "./StepInfo";

const HowItWorks = () => {
  return (
    <Box>
      <Typography variant='h2' color='#fff' textAlign='center'>
        How It Works
      </Typography>
      <Box display='flex' flexDirection='column' gap={4}>
        <StepContainer step={1} />
        <StepInfo
          title='Step 1'
          src='/img_1.png'
          description='Take action with unbiased, real-time AI support. Splat will scan information across centralized and decentralized platforms in seconds to help you analyze the market and build a thesis for you.'
        />
      </Box>
      <Box display='flex' flexDirection='column' gap={4}>
        <StepContainer step={2} />
        <StepInfo
          title='Step 2'
          description='Take action with unbiased, real-time AI support. Splat will scan information across centralized and decentralized platforms in seconds to help you analyze the market and build a thesis for you.'
          isLeft
          src='/img_2.png'
        />
      </Box>
      <Box display='flex' flexDirection='column' gap={4}>
        <StepContainer step={3} />
        <StepInfo
          title='Step 3'
          description='Take action with unbiased, real-time AI support. Splat will scan information across centralized and decentralized platforms in seconds to help you analyze the market and build a thesis for you.'
          src='/img_3.png'
        />
      </Box>
    </Box>
  );
};

export default HowItWorks;
