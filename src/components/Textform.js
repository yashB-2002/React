import React, { useState } from 'react'

function Textform(props) {
    const [text, setText] = useState("");

    const handleClick1 = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClick2 = () => {
        setText("");
    }
    const handleClick3 = () => {
        let a = document.getElementById("exampleFormControlTextarea1");
        a.select();
        navigator.clipboard.writeText(a.value);
    }
    const handleClick5 = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <div className="mb-3 my-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter some text</label>
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleChange} rows="9" />
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClick1}>Uppercase Letters</button>
            <button className="btn btn-primary mx-2" onClick={handleClick2}>Clear Letters</button>
            <button className="btn btn-primary mx-2" onClick={handleClick3}>Copy Letters</button>
            <button className="btn btn-primary mx-2" onClick={handleClick5}>Lowercase Letters</button>

            <h2 className="my-3" style={{ textTransform: 'uppercase' }}>About Text You Have Entered</h2>
            <p>TOTAL WORDS -: {text.split(" ").length} , TOTAT CHARACTERS -: {text.length} , TIME REQUIRED TO READ -:  {text.length * 60}seconds , CAN TYPE -: {2000 - text.length} CHARRACTERS MORE. </p>

            <h2 style={{ textTransform: 'uppercase' }} >Preview of your Text</h2>
            <p>{text}</p>
        </div>
    )
}

export default Textform
