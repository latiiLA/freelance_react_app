import React from "react";

//Material Ui imports
import { Box, Typography } from "@mui/material";

const Howitworks = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          marginBottom: "5rem",
        }}
      >
        <Typography
          sx={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
        >
          How it Works
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginX: "5rem",
            gap: 25,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
            >
              Guest
            </Typography>

            <Typography sx={{ fontSize: "1.4rem" }}>
              Any user can browse and search freelance jobs. Users have to
              create an account and signin to their account to vie job details
              and apply for jobs.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
              Freelancer
            </Typography>
            <Typography sx={{ fontSize: "1.4rem", textAlign: "center" }}>
              Logged in freelancers can search, view and apply for freelance
              job. They can also manage their account and profiles.
              Ethiofreelance.com lets freelancers view their status and chat
              with their employer.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
            >
              Employer
            </Typography>
            <Typography sx={{ fontSize: "1.4rem", textAlign: "center" }}>
              Employers can post jobs with required skills and price. when
              posting a job they can set the price fixed or open for bidding.
              They can close, delete and modigy jobs. They can easily connect
              with freelancers through our system.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
            >
              Our Job
            </Typography>
            <Typography sx={{ fontSize: "1.4rem", textAlign: "center" }}>
              Once an account is created and approved the system notifies
              freelancers when related jobs are posted. Once a job is finished
              the system gets a 10% from a job payments
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Howitworks;
