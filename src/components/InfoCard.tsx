import React from "react";
import { Box, Typography } from "@mui/material";

interface InfoCardProps {
  index: number;
  question: string;
  label: string;
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { index, question, label } = props;

  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: 1,
        borderRadius: 1,
        borderColor: "divider",
        transition: "0.3s",
        ":hover": {
          scale: 1.03,
        },
      }}
      padding={{ xs: 4 }}
    >
      <Typography variant='body2' mb={4}>
        {question}
      </Typography>
      <Box display='flex' gap={4}>
        <Typography variant='h1'>{index}</Typography>
        <Typography>{label}</Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
