import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ width: 400, height: 200 }}>
      <Card sx={{ width: 240 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: 1,
            }}
            gutterBottom
          >
            About Me
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "8px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            quas delectus expedita error corporis nam accusantium, possimus
            tenetur ex, autem optio, distinctio laudantium eos iste.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
