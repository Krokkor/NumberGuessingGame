import React from "react";
import { useState, useEffect } from "react";

const InputField = () => {

    const [initialValue, setValue] = useState("");

    //old test. Don't mind the onchange and value on input text field either.
    useEffect(() => {
        console.log("life cycle starts, mounted.");
        //empty array makes it run only on load
    }, []);
    
    return (
        <input type="text" 
        value={initialValue} 
        onChange={(change) => setValue(change.target.value)} 
        className="inputField"
        id="inputField"
        placeholder="Insert number"></input>
    )
}

export default InputField