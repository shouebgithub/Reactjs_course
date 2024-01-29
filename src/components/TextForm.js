import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    // console.log("handle up clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
}
const handleextraspaces = () => {
    // console.log("handle up clicked");
    let newText = text.split(/[ ]+/);
    newText = newText.join(' ');
    setText(newText);
}

const handleLoClick = () => {
    // console.log("handle up clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
}
const handleCopyText = () => {
   let txt = document.getElementById('myBox');
    txt.select();
   navigator.clipboard.writeText(txt.value);
   props.showAlert("Text Copied!", "success");
}
const handletitlecase = () => {
    
   
       let words = text.split(" ");
       let joined_words = [];
       let cap;
       words.forEach(function (ele){
        if(ele[0] != undefined) {
        cap = ele[0].toLocaleUpperCase() + ele.slice(1).toLocaleLowerCase();
        joined_words += cap + " ";
        }
       });
        setText(joined_words);   
        props.showAlert("Converted to title case", "success");
}
const onhandleChange = (event) => {
    // console.log("on handle change clicked");
    setText(event.target.value);
}
    const [text, setText] = useState("");
    // text = "new text"; // wrong way to assign state to a variable;
    // setText("Enter new text here2"); // correct way to set state of a variable;
  return (    
    <>    
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">        
        <textarea value={text} onChange={onhandleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-primary mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handletitlecase}>Convert to Title Case</button>
        <button className="btn btn-primary mx-1" onClick={handleextraspaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
    </div>
    <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h3 className='my-3'>Your Text Summary</h3>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.length?text.split(" ").length:0} words and {text.length} characters</p>
        <p>{.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the box to preview"}</p>
    </div>
    </>
  )
}
