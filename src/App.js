import logo from "./logo.svg";
import "./App.css";
import { useState, useContext, createContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
export default App;
