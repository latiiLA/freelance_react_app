import React, { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

//import components
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "auto",
        gap: 6,
      }}
    >
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          width: "30%",
          // border: "1px solid #fff",
          borderRadius: "2%",
          boxShadow: "0.5rem 0.5rem #333333",
          padding: "5rem",
          // // position: "absolute",
          // // top: "100%",
          // // left: "50%",
          // transform: "translate(-50%, -50%)",
          marginX: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box>
          <Typography
            textAlign={"center"}
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              backgroundColor: "#78866B",
              borderRadius: "0.5rem",
              padding: "0.5rem",
            }}
          >
            SignUp
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField type="email" label="Email" />
          <TextField type="password" label="Password" />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select id="demo-simple-select-label" label="Country">
              <MenuItem value={10}>Ethiopia</MenuItem>
              <MenuItem value={20}>Japan</MenuItem>
              <MenuItem value={30}>China</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{}}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Account Type
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: 5,
              }}
            >
              <FormControlLabel
                value="Freelancer"
                control={<Radio />}
                label="Freelancer"
              />
              <FormControlLabel
                value="Employer"
                control={<Radio />}
                label="Employer"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ alignItems: "center", width: "45%" }}
          >
            SignUp
          </Button>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default SignUp;
