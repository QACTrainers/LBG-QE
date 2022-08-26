// import logo from "./logo.svg"
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./Main";
import "./App.css";

function App() {
  return (
    <Router>
      <Header/>
      <Main />
    </Router>
  );
}

export default App;
