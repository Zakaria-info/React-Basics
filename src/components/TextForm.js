import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("OnChange")
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='textform-container'>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="text-summary my-3">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>It takes only {0.008 *text.split(" ").length} Minutes to read if you move your mouth like tortoise.  </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
