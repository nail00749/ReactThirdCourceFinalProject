import React from "react";

class CardsMenu extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        if (this.props.dataCards) {
            let listItems = this.props.dataCards.map((dataCards) =>
                <div>{dataCards.text}</div>
            )
            return (
                <div>{listItems}</div>
            );
        } else {
            return <div></div>
        }
    }
}

export default CardsMenu;