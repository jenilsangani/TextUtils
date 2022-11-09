import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  // dark mode
  
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#062446";
      showAlert("Dark mode has been enabled", "success"); //Alert msg
    } else {
      setMode("light");
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

    // alert timeout

    setTimeout(() => {
      setAlert(null);
    },1500)
  }  

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert} />
      {/* set default */}
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Enter your text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
