import React  from "react";

class Select extends React.Component{

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <select>
                    {this.props.list}
                </select>
            </div>
        );
    }
}

export default Select;