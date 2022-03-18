import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Circle } from "@mui/icons-material";

const ExperienceBox = () => {
  return (
    <Box sx={{ marginBottom: 1 }}>
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
        Experience
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
      <List sx={{ mt: -1 }}>
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "14px" }}>
            <Circle sx={{ width: "6px", height: "6px", color: "#aa7d55" }} />
          </ListItemIcon>
          <ListItemText
            primary="Post"
            primaryTypographyProps={{ fontSize: 10 }}
            secondary=" Company · 2021-2022"
            secondaryTypographyProps={{ fontSize: 10 }}
          />
        </ListItem>
        <Typography variant="body2" sx={{ fontSize: 9 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          recusandae.
        </Typography>
      </List>
      <List sx={{ mt: -1 }}>
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "14px" }}>
            <Circle sx={{ width: "6px", height: "6px", color: "#aa7d55" }} />
          </ListItemIcon>
          <ListItemText
            primary="Post"
            primaryTypographyProps={{ fontSize: 10 }}
            secondary=" Company · 2021-2022"
            secondaryTypographyProps={{ fontSize: 10 }}
          />
        </ListItem>
        <Typography variant="body2" sx={{ fontSize: 9 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          recusandae.
        </Typography>
      </List>
    </Box>
  );
};

export default ExperienceBox;
