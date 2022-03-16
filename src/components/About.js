import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ width: "250px" }}>
      <Stack spacing={1}>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontWeight: 900,
            letterSpacing: 1,
            fontSize: "10px",
            textTransform: "uppercase",
          }}
        >
          About Me
        </Typography>
        <Typography variant="body2" sx={{ color: "white", fontSize: "8px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis
          molestias, quas voluptates, vero vel eveniet illo enim nesciunt nihil
          earum temporibus? Eligendi, dolores cum.
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
