// import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Copyright from "./components/Copyright";

function App() {

  // dark mode
  
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#062446";
      // document.title = "TextUtils - DarkMode"  // for change title
      showAlert("Dark mode has been enabled", "success"); //Alert msg
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.title = "TextUtils - LightMode"  // for change title
      showAlert("Light mode has been enabled", "ssuccess"); //Alert msg    
    }
  };
  
  // console.log("Enabled : " + mode + " mode");    // for console
  
  // Alert

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type,
    });

    // alert timeout

    setTimeout(() => {
      setAlert(null)
    },1500)
  }  

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert} />
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} />
        <Copyright mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
