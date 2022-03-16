import { Autorenew, Download } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import ContactBox from "./ContactBox";
import ResumeTop from "./ResumeTop";
import SkillsBox from "./SkillsBox";
// import About from "./About";

const Resume = () => {
  const resumeTheme = createTheme({
    typography: {
      fontFamily: "Lato",
    },
  });
  return (
    <ThemeProvider theme={resumeTheme}>
      <Container>
        <CssBaseline />

        {/* Main Box */}
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" gutterBottom>
            Resume
          </Typography>

          {/* Resume Box */}
          <Box
            sx={{
              background:
                "linear-gradient(15deg, #0F2C33 0, #0F044C 20%, #ffffff 20%, #ffffff 75%, #0F044C 75%, #0F044C 100%);",
              backgroundColor: "yellow",
              width: { sm: "40%", xs: "80%" },
              height: { xs: "60vh", sm: "80vh" },
            }}
          >
            <Container>
              <ResumeTop />
              <ContactBox />
              <SkillsBox />
            </Container>
          </Box>

          {/* Buttons Stack */}
          <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
            <Button variant="contained" endIcon={<Autorenew />}>
              Build New
            </Button>
            <Button variant="outlined" endIcon={<Download />}>
              Download
            </Button>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Resume;
