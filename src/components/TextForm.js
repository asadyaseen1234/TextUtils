import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        //console.log("Upercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Conveted to uppercase", "success");
    }
    
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Conveted to lowercase", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboeard", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Remove", "success");
    }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }


  return (
    <>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-2 me-1" onClick={handleUpClick}>Convert to Upercase</button>   
            <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-2 " onClick={handleExtraSpace}>Remove Extra Spacing</button>

        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text  Summary</h2>
            <p> {text.split(" ").length} words {text.length} characters</p>
            <p> {0.008 * text.length } Minutes Read </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
  )
}
