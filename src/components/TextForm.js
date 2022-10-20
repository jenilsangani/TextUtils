import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
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
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            // value={text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          style={{ marginRight: 16 }}
          onClick={handleUpClick}
        >
          {" "}
          Convert to Uppercase{" "}
        </button>

        <button
          className="btn btn-primary"
          style={{ marginRight: 16 }}
          onClick={handleLowClick}
        >
          {" "}
          Convert to Lowercase{" "}
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
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
