import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("handle up clicked");
    let newText = text.toUpperCase();
    setText(newText);
}
const handleLoClick = () => {
    // console.log("handle up clicked");
    let newText = text.toLowerCase();
    setText(newText);
}
const onhandleChange = (event) => {
    // console.log("on handle change clicked");
    setText(event.target.value);
}
    const [text, setText] = useState("Enter text here");
    // text = "new text"; // wrong way to assign state to a variable;
    // setText("Enter new text here2"); // correct way to set state of a variable;
  return (    
    <>    
    <div className='container'> 
        <h1>{props.heading}</h1>
        <div className="mb-3">        
        <textarea value={text} onChange={onhandleChange} className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container">
        <h3 className='my-3'>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
