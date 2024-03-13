import React from "react";

// Material UI imports
import { Box, Button, TextField, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#182c41", padding: "16px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          width: "70%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "15%",
            color: "white",

            //   backgroundColor: "red",
          }}
        >
          <Typography
            sx={{
              margin: "auto",
              // width: "25%",
              fontSize: "1.5rem",
            }}
          >
            Ethiofreelance
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "40%",
            color: "white",

            //   backgroundColor: "yellow",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontStyle: "bold",
              margin: "auto",
            }}
          >
            HOME
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontStyle: "bold",
              margin: "auto",
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontStyle: "bold",
              margin: "auto",
            }}
          >
            HOW IT WORKS
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontStyle: "bold",
              margin: "auto",
            }}
          >
            BROWSE JOBS
          </Typography>
          {/* <Box>Social media links</Box> */}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "16px",
          color: "#fff",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography>About Us</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Details
          </Typography>
          <Typography>Report</Typography>
          <Typography>Ordering and Payment</Typography>
          <Typography>Payment</Typography>
          <Typography>Policy and Privacy</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Help
          </Typography>
          <Typography>How to earn</Typography>
          <Typography>Support</Typography>
          <Typography>Tips</Typography>
          <Typography>FAQ</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField></TextField>
          <TextField></TextField>

          <Button variant="contained">Submit</Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          Social Media Links
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
