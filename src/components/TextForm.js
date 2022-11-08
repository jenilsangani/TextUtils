import React, { useState } from "react";

export default function TextForm(props) {
  // const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newTextUpperCase = text.toUpperCase();
    setText(newTextUpperCase);
    console.log("Text changed in Uppercase" + " : " + newTextUpperCase);
  };
  const handleLowClick = () => {
    let newTextLowercase = text.toLowerCase();
    setText(newTextLowercase);
    console.log("Text changed in Lowercase" + " : " + newTextLowercase);
  };
  const handleClearClick = () => {
    let newTextClear = "";
    setText(newTextClear);
    console.log("Cleared this text" + " : " + text);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handlecopy = () => {
    var text = document.getElementById("myBox");
    console.log("Copied this text " + " : " + text.value);
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log("Removed extra spaces" + " : " + text);
    setText(newText.join(" "));
  };
  let peiviewStyle = {
    border: "1px solid black",
    padding: "10px",
    background: "white",
    fontWeight: "600",
    color:"black"
  };
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div>

         {/* for on change */}

          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8" style={{backgroundColor: props.mode === "dark" ? "gray" : "white",color:props.mode === "dark" ? "white" : "black"}}></textarea>
        </div>

        {/* Convert to Uppercase */}

        <button className="btn btn-primary" style={{ marginRight: 16, marginTop: 16 }} onClick={handleUpClick}>
          {" "}
          Convert to Uppercase{" "}
        </button>

        {/* Convert to Lowercase */}

        <button className="btn btn-primary" style={{ marginRight: 16, marginTop: 16 }} onClick={handleLowClick}>
          {" "}
          Convert to Lowercase{" "}
        </button>

        {/* copy text */}

        <button className="btn btn-primary" style={{ marginRight: 16, marginTop: 16 }} onClick={handlecopy}>
          Copy Text
        </button>

        {/* Remove extra spaces */}

        <button className="btn btn-primary" style={{ marginRight: 16, marginTop: 16 }} onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>

        {/* Clear Text */}

        <button className="btn btn-primary" style={{ marginRight: 16, marginTop: 16 }} onClick={handleClearClick}>
          Clear Text{" "}
        </button>
      </div>

      {/* Your text summary */}

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p style={peiviewStyle}>{text.length>0?text:"Enter somthing in textbox to preview it here "}</p>
      </div>
    </>
  );
}
