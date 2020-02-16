import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
