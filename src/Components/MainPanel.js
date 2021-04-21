import React, {Component} from "react";

function onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
}

function createSelectItems(e) {
    let items = []
    console.log(e)
    /*for (let i = 0; i < e.target.length; i++) {
        items.push(<option value={e.target[i]}>123</option>)
    }*/
    return items
}

const MainPanel = (params) => {
    return (

    );
}

export default MainPanel