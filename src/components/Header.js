import React from "react";

//Material Ui imports
import { Box, AppBar, Typography, TextField, Button } from "@mui/material";
import { Toolbar } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#182c41" }}>
        <Toolbar
          sx={{
            marginY: "0.5%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              //   backgroundColor: "yellow",
            }}
          >
            <Typography
              sx={{
                margin: "auto",
                width: "25%",
                fontSize: "1.5rem",
              }}
            >
              Ethiofreelance
            </Typography>
            {/* <Box border={"none"}> */}
            <TextField
              placeholder="Search Jobs"
              size="small"
              sx={{
                border: "3px solid",
                borderRadius: "50px",
                outline: "transparent",
                width: "55%",
                color: "#fff",

                "& input": {
                  color: "#fff", // Set text color to white
                  fontSize: "1rem",
                },
                "&:focus": {
                  outline: "none", // Remove outline on focus
                  border: "none",
                  boxShadow: "none", // Remove boxShadow on focus
                  borderColor: "transparent",
                },
              }}
            />
            {/* </Box> */}

            <Button variant="text" sx={{ color: "#fff", width: "20%" }}>
              Browse Jobs
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "10%",
              //   backgroundColor: "yellow",
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1e96ac", color: "#fff" }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1e96ac", color: "#fff" }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
