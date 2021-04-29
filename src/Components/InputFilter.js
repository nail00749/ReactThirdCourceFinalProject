import React from "react";

let InputFilter = (props) => {
    return(
        <div>
            <input placeholder={props.placeholder} onChange={event => props.onChange(event)}/><span>
            <img src={props.img}/></span>
        </div>
    )
}

export default InputFilter

