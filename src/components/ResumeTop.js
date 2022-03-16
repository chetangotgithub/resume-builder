import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const ResumeTop = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            mt: 3,
            border: "12px white solid",
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "white",
            textTransform: "uppercase",
            mt: 3,
            textAlign: "right",
            fontWeight: 700,
          }}
        >
          Name
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "white",
            textTransform: "uppercase",
            textAlign: "right",
            fontWeight: 700,
          }}
          gutterBottom
        >
          Surname
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            textTransform: "uppercase",
            textAlign: "right",
            letterSpacing: 1,
            fontWeight: 500,
            fontSize: "10px",
          }}
        >
          Student
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResumeTop;
