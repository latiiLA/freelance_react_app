import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

const Filter = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Box sx={{ marginLeft: "2rem", marginTop: "4.3rem" }}>
            <Box>
              <Typography sx={{ fontSize: "1.3rem" }}>
                Experiance Level
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
              </FormGroup>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "1.3rem" }}>Job Type</Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
              </FormGroup>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "1.3rem" }}>
                Number of applications
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
              </FormGroup>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "1.3rem" }}>
                Client Histrory
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Label" />
              </FormGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
