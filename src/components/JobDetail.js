import { Box, Button, Typography } from "@mui/material";
import React from "react";

//imported components
import Header from "./Header";
import Footer from "./Footer";

const JobDetail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginY: "auto",
        gap: 5,
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          border: "0.2rem solid #333333",
          borderLeft: "0.2rem solid #333333",
          borderRight: "0.2rem solid #333333",
          // boxShadow: "0.5rem 0.5rem #333333",
          borderRadius: "2rem",
          width: "50%",
          marginX: "auto",
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            borderBottom: "0.2rem solid #333333",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Looking for Full-Stack Software Engineers working at startups to
              participate in 1 hour Interview
            </Typography>
            <Typography>Posted 2 weaks ago</Typography>
          </Box>
          <Box
            sx={{
              borderTop: "0.2rem solid #333333",
              paddingY: "2rem",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem" }}>
              I'm on a lookout for Full Stack Engineers (who as part of their
              job perform regularly functional testing) to participate in 1 hour
              in-depth interview. The interviews are part of market research I'm
              doing for my client. The interviews will be recorded although
              after the analysis, recordings will be removed and collected data
              will be anonymised. The interview will take place via Microsoft
              Teams around next week (most likely 19th and 20th of March)
              between 10am - 9pm CET. To participate you should have good
              internet connection, working webcam and mic. Requirements to
              participate: - At least 2 years of experience in full-stack
              software engineering, - You ideally work at a startup, where you
              don't have access to testing team - thus you must perform testing
              on your own. - Your testing is (at least 80% of the time) focused
              in particular on web-based applications - You have experience with
              various methods of software testing. - Your testing is mostly
              based on functional testing of Graphical User Interfaces In
              attachment, please provide your CV.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 25,
            // borderTop: "0.2rem solid #F5F5F5",
            // borderBottom: "0.2rem solid #F5F5F5",
            paddingY: "2rem",
          }}
        >
          <Typography>Price</Typography>
          <Typography>Project Type</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            borderTop: "0.2rem solid #333333",
            borderBottom: "0.2rem solid #333333",
            paddingY: "2rem",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem" }}>Skills Required</Typography>
          <Typography>GUI testing</Typography>
          <Typography>Functional Testing</Typography>
          <Typography>Automatic Testing</Typography>
          <Typography>GUI Testing</Typography>
          <Typography>React</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ fontSize: "1.5rem" }}>
            Activity on this job
          </Typography>
          <Typography>Applications: </Typography>
          <Typography>Last views by client: </Typography>
          <Typography>Inteviewing: </Typography>
          <Typography>Invites sent: </Typography>
          <Typography>Unanswered invites: </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          // width: "30%",
          marginX: "auto",
          // marginTop,
        }}
      >
        <Button variant="contained">Apply</Button>
        <Button variant="contained">Save Job</Button>
        <Button>Flag this job</Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default JobDetail;
