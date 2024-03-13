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

// imported pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/homebody" element={<Homebody />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
