import React, { useState } from "react";

export default function TextForm(props) {
  // const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newTextUpperCase = text.toUpperCase();
    setText(newTextUpperCase);
    props.showAlert("Converted to Uppercase", "success"); // for alert
    // console.log("Text changed in Uppercase" + " : " + newTextUpperCase); // for console
  };
  const handleLowClick = () => {
    let newTextLowercase = text.toLowerCase();
    setText(newTextLowercase);
    props.showAlert("Converted to Lowercase", "success"); // for alert
    // console.log("Text changed in Lowercase" + " : " + newTextLowercase); // for console
  };
  const handleClearClick = () => {
    let newTextClear = "";
    setText(newTextClear);
    props.showAlert("Cleared text", "success"); // for alert
    // console.log("Cleared this text" + " : " + text); // for console
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success"); // for alert
    // tele.log("Copied text" + " : " + text.value); // for console
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // console.log("Removed extra space" + " : " + text); // for console
    props.showAlert("Extra spaces removed", "success"); // for alert
  };
  let previewStyle = {
    border: "1px solid black",
    padding: "10px",
    background: "white",
    fontWeight: "600",
    color:"black"
  };
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2 className='mb-3'>{props.heading}</h2>
        <div>

         {/* for on change */}

          <textarea className="form-control mx-1 my-1" value={text} onChange={handleonChange} id="myBox" rows="8" style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white",color:props.mode === "dark" ? "white" : "black"}}></textarea>
        </div>

        {/* Convert to Uppercase */}

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{ marginRight: 16, marginTop: 16 }} onClick={handleUpClick}>
          {" "}
          Convert to Uppercase{" "}
        </button>
        
        {/* Convert to Lowercase */}

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{ marginRight: 16, marginTop: 16 }} onClick={handleLowClick}>
          {" "}
          Convert to Lowercase{" "}
        </button>

        {/* copy text */}

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{ marginRight: 16, marginTop: 16 }} onClick={handlecopy}>
          Copy Text
        </button>

        {/* Remove extra spaces */}

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{ marginRight: 16, marginTop: 16 }} onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>

        {/* Clear Text */}

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{ marginRight: 16, marginTop: 16 }} onClick={handleClearClick}>
          Clear Text{" "}
        </button>
        
      </div>

      {/* Your text summary */}

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" " ).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

        <h2>Preview</h2>
        <p style={previewStyle}>{text.length>0?text:"Enter somthing in textbox to preview it here "}</p>
      </div>
    </>
  );
}
