import { Autorenew, Download } from "@mui/icons-material";
import {
  Avatar,
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
import About from "./About";

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
        <Box
          sx={{
            //   backgroundColor: "red",
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
          <Box
            sx={{
              // backgroundColor: "yellow",
              width: { sm: "40%", xs: "80%" },
              height: { xs: "60vh", sm: "80vh" },
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  "-webkit-linear-gradient(65deg, #FFF 50%, #0F044C 50%);",
                // background:
                //   "linear-gradient(10deg, #3f51b5 0, #3f51b5 33%, #ffffff 33%, #ffffff 66%, #3f51b5 66%, #3f51b5 100%);",
                // backgroundImage:
                //   "linear-gradient(10deg, #c4d7e6 0, #c4d7e6 33%, #66a5ad 33%, #66a5ad 66%, #ff0000 66%, #ff0000 100%);",
                height: { xs: "60vh", sm: "50vh" },
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography>Something</Typography>
              <Avatar
                sx={{
                  width: 150,
                  height: 150,
                  marginTop: 10,
                  border: "12px white solid",
                }}
              ></Avatar>
              <Box>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    textTransform: "uppercase",
                    color: "white",
                    mt: 10,
                    mr: 4,
                    textAlign: "right",
                    fontWeight: 900,
                  }}
                >
                  Name Surname
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "white", marginLeft: 16 }}
                >
                  Student
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                // backgroundColor: "red",
                backgroundImage:
                  "-webkit-linear-gradient(253deg, #FFF 50%, #0F044C 50%);",
                height: "20vh",
              }}
            >
              <About />
            </Box>
          </Box>
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
