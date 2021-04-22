import React  from "react";

class Select extends React.Component{

    constructor(props) {
        super();
    }



    render() {

        if(this.props.options) {
            let listItems = this.props.options
            console.log(listItems)
            return (
                <div>
                    <select>
                        {listItems}
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