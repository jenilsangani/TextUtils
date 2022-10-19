import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
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
        Convert to Uppercase
      </button>

      <button
        className="btn btn-primary"
        style={{ marginRight: 16 }}
        onClick={handleLowClick}
      >
        Convert to Lowercase
      </button>
    </div>
  );
}
