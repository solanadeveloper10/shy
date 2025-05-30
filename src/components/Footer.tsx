import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import { FaCopy, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "4Uf883orBx89VQZiV4EoRpNqUWYN5ZuEvC4PCpQ9moon"
    );

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box display='flex' gap={1} mb={2}>
            <Box
              component='img'
              src='/logo1.png'
              width={30}
              height={30}
              borderRadius={1}
            />
            <Typography variant='h5' color='primary.main'>
              HypeUp
            </Typography>
          </Box>
          <Box display='flex' gap={1} alignItems='center' mb={2}>
            <Typography variant='body2' color='#fff'>
              CA:
            </Typography>
            <Typography
              variant='body2'
              color='grey.500'
              sx={{ fontSize: 12, borderBottom: "1px dashed" }}
            >
              4Uf883orBx89VQZiV4EoRpNqUWYN5ZuEvC4PCpQ9moon
            </Typography>
          </Box>
          {isCopied ? (
            <Button startIcon={<Check />} variant='contained' color='primary'>
              Copied!
            </Button>
          ) : (
            <Button
              onClick={handleCopy}
              startIcon={<FaCopy />}
              variant='contained'
              color='primary'
            >
              Copy Address
            </Button>
          )}

          <Box mt={3}>
            <Typography variant='body2' color='#fff' textAlign='center' mb={1}>
              Follow Us
            </Typography>
            <Box display='flex' gap={1} justifyContent='center'>
              <FaTwitter color='#fff' />
              <FaTwitter color='#fff' />
              <FaTwitter color='#fff' />
            </Box>
          </Box>
          <Typography variant='body1' color='grey.500' align='center' mt={3}>
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
