import logo from "./assets/logo.svg";
import "./App.css";

// imported libraries
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// imported components
import Header from "./components/Header";
import Footer from "./components/Footer";

// imported pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/header" component={Header} />
        <Route path="/footer" component={Footer} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    // <div className="App">
    //   Hello
    //   <img src={logo} alt="alt prop" />
    // </div>
  );
}

export default App;
