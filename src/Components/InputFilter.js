import React from "react";

let InputFilter = (props) => {
    return(
        <div>
            <input placeholder={props.placeholder}/><span>
            <img src={props.img}/></span>
        </div>
    )
}

export default InputFilter

