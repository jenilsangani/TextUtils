import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setkMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setkMode = "dark";
    }
    else{
      setkMode = "light";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* set default */}
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" />
        <About />
      </div>
    </>
  );
}

export default App;
