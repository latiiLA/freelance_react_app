import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Homebody = () => {
  return (
    <Box>
      <Box>
        <Typography>The Best freelancing website</Typography>
        <Typography>
          More than 7 million freelancers and 9 thousand employer are using
          ethiofreelance.com
        </Typography>
        <Box>
          <Button variant="outlined">Start freelancing</Button>
          <Button variant="outlined">Post Job</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Homebody;
