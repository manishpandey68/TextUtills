import React, { useState } from "react";

export default function FormText(props) {
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  let handleUpChange = (event) => {
    setText(event.target.value);
  };
  let handleLowClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  let clearClick= () => {
    setText("");
  };
  const [text, setText] = useState("Enter a text here");
  return (
    <>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleUpChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",}}
          rows="3"
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Click here for UpperCase  
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Click here for Lowercase  
        </button>
        <button className="btn btn-primary mx-2" onClick={clearClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
