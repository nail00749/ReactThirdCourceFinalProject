import React  from "react";
import {logDOM} from "@testing-library/react";

class Select extends React.Component{

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if(this.props.options) {
            let listItems = ['']
            this.props.options.forEach(item => listItems.push(item))
            let list = listItems.map((item, index) => <option key={index}>{item.toString()}</option>)

            return (
                <div>
                    <select onChange={(e) => {this.props.onChange(e)}}>
                        {list}
                    </select>
                </div>
            )
        }else{
            return (
                <div>

                </div>
            )
        }



    }
}

export default Select;