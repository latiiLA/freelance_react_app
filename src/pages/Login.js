import React from "react";

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
  Checkbox,
} from "@mui/material";

//imported components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "auto",
        gap: 15,
      }}
    >
      <Box>
        <Header />
      </Box>

      <Box
        sx={{
          width: "25%",
          border: "1px solid #fff",
          borderRadius: "2%",
          boxShadow: "0.5rem 0.5rem #333333",
          padding: "5rem",
          // position: "absolute",
          // top: "45%",
          // left: "50%",
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
            Login
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField type="email" label="Email" />
          <TextField type="password" label="Password" />
        </Box>

        <Box>
          <FormControlLabel
            control={<Checkbox />}
            label="Rememeber me for a month"
          />
        </Box>

        <Box>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            Login
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button>Forgot Password</Button>
          <Button>Don't have an account?</Button>
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Login;
