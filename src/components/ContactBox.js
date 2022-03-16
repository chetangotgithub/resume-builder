import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { LocationOn, Mail, Phone } from "@mui/icons-material";

const ContactBox = () => {
  return (
    <Box>
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
        Contact
      </Typography>
      <Box
        component="div"
        sx={{
          borderBottom: "3px solid #0F044C",
          width: "40px",
          paddingTop: "4px",
          marginBottom: 1,
        }}
      />
      <List>
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "22px" }}>
            <Avatar sx={{ width: "16px", height: "16px", bgcolor: "#aa7d55" }}>
              <Phone sx={{ width: "12px", height: "12px" }} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="+91 9999999999"
            primaryTypographyProps={{ fontSize: 10 }}
          />
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "22px" }}>
            <Avatar sx={{ width: "16px", height: "16px", bgcolor: "#aa7d55" }}>
              <Mail sx={{ width: "12px", height: "12px" }} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="student@email.com"
            primaryTypographyProps={{ fontSize: 10 }}
          />
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <ListItemIcon sx={{ minWidth: "22px" }}>
            <Avatar sx={{ width: "16px", height: "16px", bgcolor: "#aa7d55" }}>
              <LocationOn sx={{ width: "12px", height: "12px" }} />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Mumbai, India"
            primaryTypographyProps={{ fontSize: 10 }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactBox;
