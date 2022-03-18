import React, { createRef } from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Autorenew, Download } from "@mui/icons-material";
import Pdf from "react-to-pdf";
import ContactBox from "./ContactBox";
import ResumeTop from "./ResumeTop";
import SkillsBox from "./SkillsBox";
import ExperienceBox from "./ExperienceBox";
import EducationBox from "./EducationBox";
import About from "./About";

const Resume = () => {
  const resumeTheme = createTheme({
    typography: {
      fontFamily: "Lato",
    },
  });

  const resumeContainerRef = createRef();

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
            ref={resumeContainerRef}
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
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={5}>
                  <ContactBox />
                  <SkillsBox />
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      height: "328px",
                      backgroundColor: "#ede4dc",
                      width: "6px",
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <ExperienceBox />
                  <EducationBox />
                </Grid>
              </Grid>
              <About />
            </Container>
          </Box>

          {/* Buttons Stack */}
          <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
            <Button variant="contained" endIcon={<Autorenew />}>
              Build New
            </Button>
            <Pdf targetRef={resumeContainerRef} filename="your-resume.pdf">
              {({ toPdf }) => (
                <Button
                  onClick={toPdf}
                  variant="outlined"
                  endIcon={<Download />}
                >
                  Download
                </Button>
              )}
            </Pdf>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Resume;
