import React  from "react";

class CardsMenu extends React.Component{

    constructor(props) {
        super();
    }

    render() {
        let listItems = this.props.dataCards.map((dataCards) =>
            <div>{dataCards.text}</div>
        )
        return (
            <div>{listItems}</div>
        );
    }
}

export default CardsMenu;