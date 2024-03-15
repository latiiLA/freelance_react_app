// import logo from "./assets/logo.svg";
import "./App.css";

// imported libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// imported components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homebody from "./components/Homebody";
import Howitworks from "./components/Howitworks";
import Categories from "./components/Categories";
import JobCard from "./components/JobCard";

// imported pages
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import BrowseJobs from "./pages/BrowseJobs";
import PostJobs from "./pages/PostJobs";
import EmployerProfile from "./pages/EmployerProfile";
import FreelancerProfile from "./pages/FreelancerProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<BrowseJobs />} />
        <Route path="/post" element={<PostJobs />} />
        <Route path="/emppro" element={<EmployerProfile />} />
        <Route path="/frepro" element={<FreelancerProfile />} />

        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/homebody" element={<Homebody />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/card" element={<JobCard />} />
      </Routes>
    </Router>
  );
}

export default App;
