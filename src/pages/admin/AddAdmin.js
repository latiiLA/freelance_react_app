import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AddAdmin = () => {
  // Define basic styles
  const flex_column = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Space-between",
  };
  const flex_row = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "Space-between",
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Box>
        <Box>
          <Box sx={{ ...flex_column, gap: 20 }}>
            <Box>
              <Header />
            </Box>
            <Box
              sx={{
                ...flex_column,
                gap: 5,
                border: "1px solid #fff",
                borderRadius: "2%",
                boxShadow: "0.5rem 0.5rem #333333",
                padding: "5rem",
                width: "30%",
                margin: "auto",
              }}
            >
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
                Add Admin
              </Typography>

              <Box sx={{ ...flex_column, gap: 2 }}>
                <TextField type="text" label="First name" />
                <TextField type="text" label="Last name" />
                <TextField type="email" label="Email" />
                <FormControl required variant="contained">
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required variant="contained">
                  <InputLabel htmlFor="filled-adornment-password2">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password2"
                    type={showPassword2 ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword2}
                          edge="end"
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Box>

            <Box>
              <Footer />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddAdmin;
