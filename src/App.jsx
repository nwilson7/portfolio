import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Contact from "./components/ContactPage";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Contact />
    </>
  );
}

export default App;
