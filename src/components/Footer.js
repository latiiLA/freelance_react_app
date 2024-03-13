import React from "react";

// Material UI imports
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  TextareaAutosize,
} from "@mui/material";

// Social Media Icons
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PublicIcon from "@mui/icons-material/Public";
import EmailIcon from "@mui/icons-material/Email";

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

            // backgroundColor: "red",
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
          <Divider sx={{ backgroundColor: "#fff" }} />
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "15%",
            // backgroundColor: "yellow",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>
            EthioFreelance is a thrusted and a growing web based freelancing
            system providing a platform for connecting freelancers and employers
            from anywhere.
          </Typography>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <TextareaAutosize
            placeholder="Leave your comment here"
            minRows={4}
            maxRows={4}
            style={{ backgroundColor: "#fff", minHeight: 20, maxHeight: 80 }}
          />

          <TextField
            placeholder="Email: optional"
            size="small"
            sx={{
              backgroundColor: "#fff",
              border: "none",

              "& input": {
                color: "#000", // Set text color to white
                fontSize: "1rem",
              },
            }}
          ></TextField>

          <Button variant="contained">Submit</Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                gap: 5,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <TelegramIcon />
              <LinkedInIcon />
              <FacebookIcon />
              <XIcon />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <SmartphoneIcon />
              <Typography>+2519676385**</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <EmailIcon />
              <Typography>ethiofreelance@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <PublicIcon />
              <Typography>Addis Ababa, Ethiopia</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Divider sx={{ backgroundColor: "#fff", marginBottom: "5px" }} />
        <Typography sx={{ color: "#fff", textAlign: "center" }}>
          Copyright © 2021 EthioFreelance. All right reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
