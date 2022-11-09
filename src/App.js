import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  // dark mode
  
  const [mode, setkMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setkMode("dark");
      document.body.style.backgroundColor = "#062446";
      showAlert("Dark mode has been enabled", "success"); //Alert msg
    } else {
      setkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success"); //Alert msg    
    }
  };
  console.log("Enabled" + " : " + mode + " " + "mode");    // for console

  // Alert

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
  }  
  // console.log("alert msg" + " : " + alert);   // for console

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert} />
      {/* set default */}
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
