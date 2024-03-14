import React from "react";

//Material Ui imports
import { Box } from "@mui/material";

//Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";
import Homebody from "../components/Homebody";
import Howitworks from "../components/Howitworks";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <Box>
      <Header />
      <Homebody />
      <Howitworks />
      <Categories />
      <Footer />
    </Box>
  );
};

export default Home;
