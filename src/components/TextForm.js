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
    console.log("you cleared this text" + " : " + text);
    // console.log("Text changed in Lowercase" + " : " + newTextLowercase);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const hadlecopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999999);
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text} // for on change
            onChange={handleonChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* Convert to Uppercase */}

        <button
          className="btn btn-primary"
          style={{ marginRight: 16 }}
          onClick={handleUpClick}
        >
          {" "}
          Convert to Uppercase{" "}
        </button>

        {/* Convert to Lowercase */}

        <button
          className="btn btn-primary"
          style={{ marginRight: 16 }}
          onClick={handleLowClick}
        >
          {" "}
          Convert to Lowercase{" "}
        </button>

        {/* Clear Text */}

        <button
          className="btn btn-primary"
          style={{ marginRight: 16 }}
          onClick={handleClearClick}
        >
          Clear Text{" "}
        </button>

    {/* copy text */}

        <button
          className="btn btn-primary"
          // style={{ marginRight: 16 }}
          onClick={hadlecopy}
        >
          Copy Text
        </button>
      </div>

      {/* Your text summary */}

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
