import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import homeimage from "../assets/homepageimg.png";

const Homebody = () => {
  return (
    <Box sx={{ margin: "16px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "2rem",
          paddingBottom: "0rem",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{ fontSize: "6rem", fontWeight: "bold", color: "#182c41" }}
          >
            The Best
          </Typography>
          <Typography
            sx={{
              fontSize: "6rem",
              fontWeight: "bold",
              marginLeft: "15%",
              color: "#182c41",
            }}
          >
            freelancing
          </Typography>
          <Typography
            sx={{
              fontSize: "6rem",
              fontWeight: "bold",
              marginLeft: "45%",
              color: "#182c41",
            }}
          >
            website
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              width: "50%",
              fontStyle: "italic",
              marginX: "2rem",
            }}
          >
            More than 7 million freelancers and 9 thousand employer are using
            ethiofreelance.com
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "50%",
              marginX: "2rem",
              marginY: "1rem",
              marginBottom: "0rem",

              //   backgroundColor: "red",
            }}
          >
            <Button
              variant="contained"
              sx={{ width: "13rem", fontWeight: "bold" }}
            >
              Start freelancing
            </Button>
            <Button
              variant="contained"
              sx={{ width: "13rem", fontWeight: "bold" }}
            >
              Post Job
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "50%", fontStyle: "italic" }}>
          <img src={homeimage} alt="home" width="100%" height="95%" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginX: "2%",
          //   backgroundColor: "Yellow",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            +7 million
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            Freelancers
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            +7,000
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            Employers
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            +12,000
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            Active jobs
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            +$27,000,000
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
            }}
          >
            Payments made
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#000" }} />
    </Box>
  );
};

export default Homebody;
