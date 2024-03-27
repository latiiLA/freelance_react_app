import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Footer from "./Footer";

const FirstTimeAdminLogin = () => {
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

  const [showPassword1, setShowPassword1] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword1 = (event) => {
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
          <Box sx={{ ...flex_column, gap: 22 }}>
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
                Change Password
              </Typography>

              <Box sx={{ ...flex_column, gap: 2 }}>
                <TextField type="email" label="Email" />
                <FormControl required variant="contained">
                  <InputLabel htmlFor="filled-adornment-password">
                    Current Password
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
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword1 ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword1}
                          edge="end"
                        >
                          {showPassword1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required variant="contained">
                  <InputLabel htmlFor="filled-adornment-password2">
                    Confirm Password
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
                <Button variant="contained">Change password</Button>
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

export default FirstTimeAdminLogin;
