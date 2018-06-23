import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import SendBottle from "./pages/SendBottle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Saved from "./pages/Saved";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/sendbottle" component={SendBottle} />
        <Route exact path="/login" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/saved" component={Saved} />

      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
