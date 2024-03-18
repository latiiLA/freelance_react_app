import React from "react";

//Material Ui imports
import { Box } from "@mui/material";

//Imported components
import JobCard from "../components/JobCard";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

const BrowseJobs = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Header />
      <Box sx={{ marginX: "5rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "25%" }}>
            <Filter />
          </Box>
          <Box sx={{ width: "75%" }}>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default BrowseJobs;
