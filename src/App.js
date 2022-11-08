import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setkMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setkMode("dark");
      document.body.style.backgroundColor = "#062446";
    } else {
      setkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  console.log(mode);
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>

      {/* set default */}
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
