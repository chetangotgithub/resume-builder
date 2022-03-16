import React from "react";
import { Box, LinearProgress, List, ListItem, Typography } from "@mui/material";

const SkillsBox = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography
        variant="body1"
        sx={{
          color: "#0F044C",
          textTransform: "uppercase",
          fontWeight: 900,
          fontSize: "12px",
          letterSpacing: 2,
        }}
      >
        Skills
      </Typography>
      <Box
        component="div"
        sx={{
          borderBottom: "3px solid #0F044C",
          width: "40px",
          paddingTop: "4px",
          marginBottom: 0.5,
        }}
      />
      <List>
        <ListItem sx={{ padding: 0 }}>
          <Box sx={{ marginBottom: 1 }}>
            <Typography sx={{ fontSize: "10px" }}>Something</Typography>
            <LinearProgress
              variant="determinate"
              value={75}
              color="inherit"
              sx={{ mt: 0.5, height: 4, width: "100px" }}
            />
          </Box>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <Box sx={{ marginBottom: 1 }}>
            <Typography sx={{ fontSize: "10px" }}>Something</Typography>
            <LinearProgress
              variant="determinate"
              value={75}
              color="inherit"
              sx={{ mt: 0.5, height: 4, width: "100px" }}
            />
          </Box>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <Box sx={{ marginBottom: 1 }}>
            <Typography sx={{ fontSize: "10px" }}>Something</Typography>
            <LinearProgress
              variant="determinate"
              value={75}
              color="inherit"
              sx={{ mt: 0.5, height: 4, width: "100px" }}
            />
          </Box>
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <Box sx={{ marginBottom: 1 }}>
            <Typography sx={{ fontSize: "10px" }}>Something</Typography>
            <LinearProgress
              variant="determinate"
              value={75}
              color="inherit"
              sx={{ mt: 0.5, height: 4, width: "100px" }}
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default SkillsBox;
