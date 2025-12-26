import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked: " +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoClick = () => {
    let newtext1 = text.toLowerCase();
    setText(newtext1);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleRemove = () => {
    let newtext2 = " ";
    setText(newtext2);
    props.showAlert("Text removed successfully", "success");
  }

  const handleUndoText = () => {
    if (history.length === 0) return;

    const previousText = history[history.length - 1];
    setText(previousText);
    setHistory(history.slice(0, -1));
    props.showAlert("Undo the text successfully", "success");
  }

  const handleSpeak = () => {
    if (text.trim() === "") return;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    props.showAlert("Read the text", "success");
  }
 
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied!");
    props.showAlert("Text copied", "success");
 }

 const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed extra spaces", "success");
 }

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";
    link.click();
    props.showAlert("Text file downloaded", "success");
  };

  const handleOnChange = (event) => {
    //console.log("On change.");
    setText(event.target.value);
    setHistory([history, text])
  }
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  /* text = "new text" -> Wrong way to change text 
   setText = ('new text') -> correct way to change the text*/

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-warning mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-1" onClick={handleRemove}>Remove Text</button>
      <button className="btn btn-info mx-1" onClick={handleUndoText}>Undo Text</button>
      <button className="btn btn-secondary mx-1" onClick={handleSpeak}>Speak</button>
      <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-dark mx-1" onClick={handleDownload}>Download Text File</button>
      <button className="btn btn-light mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes To Read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text: "Enter something to preview here.."}</p>
    </div>
    </>
  )
}
