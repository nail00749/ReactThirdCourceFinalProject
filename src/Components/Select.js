import React  from "react";
import {logDOM} from "@testing-library/react";

class Select extends React.Component{

    constructor(props) {
        super();
    }


    render() {

        if(this.props.options) {
            let listItems = ['']
            this.props.options.forEach(item => listItems.push(item))
            let list = listItems.map((item) => <option>{item.toString()}</option>)

            return (
                <div>
                    <select onChange={this.props.onChange}>
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