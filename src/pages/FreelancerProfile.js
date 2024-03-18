import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";

const FreelancerProfile = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <Box>
      <Box>
        <Box>
          <Box
            sx={{
              width: "60%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
              marginBottom: "2rem",
              gap: 5,
            }}
          >
            <Typography sx={{ margin: "auto", fontSize: "3rem" }}>
              Edit Your Profile
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography>Personal Information</Typography>
              <TextField type="text" label="First name" />
              <TextField type="text" label="First name" />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload Profile
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography>Professional Information</Typography>
              <TextField type="text" label="Title/headline" />
              <TextField type="text" label="Bio" />
              <TextField type="text" label="portfolio Links" />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Skills</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography>Service Details</Typography>
              <Box>
                <Typography>Services Offered</Typography>
                <TextareaAutosize
                  aria-label="Services Offered"
                  minRows={3}
                  placeholder="Services Offered"
                />
              </Box>
              <Box>
                <Typography>Hourly Rate</Typography>
                <TextField type="text" label="Hourly rate" />
              </Box>
              <Box>
                <Typography>Availability</Typography>
                <FormControl
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginX: "7rem",
                  }}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Account Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    required
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      // gap: 5,
                      margin: "auto",
                    }}
                  >
                    <FormControlLabel
                      value="part-time"
                      control={<Radio />}
                      label="Part-time"
                    />
                    <FormControlLabel
                      value="weakends"
                      control={<Radio />}
                      label="Weakends"
                    />
                    <FormControlLabel
                      value="full-time"
                      control={<Radio />}
                      label="Full-time"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Typography>Client Reviews and Ratings</Typography>
              <Typography>Client Reviews</Typography>
              <Typography>Client Ratings</Typography>
            </Box>
            <Box>
              <Typography>Languages</Typography>
              <Button variant="contained">Add Language</Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography>Social Media Links</Typography>
              <TextField type="text" label="LinkedIn" />
              <TextField type="text" label="Github" />
              <Button variant="contained">Additional Links</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FreelancerProfile;
