import React, { useState } from "react";

export default function Textform(props) {
  const handleupclicked = () => {
    // console.log("upper case was clicked")
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleloclicked = () => {
    // console.log("upper case was clicked")
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handlecopyclicked = async () => {
    // console.log("upper case was clicked")
    // let newtext = text.handleCopyClick();
    // setText(newtext)
    // handleCopyClick
    try {
      await navigator.clipboard.writeText(text);
      // alert("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
    // await navigator.clipboard.writeText(text);

  };

  const handledownloadclick = () => {
    // alert('dfhjdhf')
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input")], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = {"new text"}; // wrong way to change the state
  // settext{"new text"}; // correct way to change the state

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclicked}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclicked}>
          Convert To Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopyclicked}>
          Copy text{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handledownloadclick}>
          Download text{" "}
        </button>
      </div>
      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </>
  );
}
