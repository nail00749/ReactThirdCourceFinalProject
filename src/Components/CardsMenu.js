import React from "react";
import "./CardsMenu.css"

class CardsMenu extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        if (this.props.dataCards) {
            let listItems = this.props.dataCards.map((dataCards) =>
                <div key={dataCards.id} className="Card">
                    <div className="CardImage">
                        <img src='https://smoking-shop.ru/upload/catalog_files/ce4/ce49cfe5904c8982d9aba7a61d699d4a.jpg'
                             alt='hmmm'/>
                    </div>
                    <div className="Container">
                        <h3>{dataCards.category}</h3>
                        <p>{dataCards.text}</p>
                    </div>
                </div>
            )
            return (
                <div className='CardsMenu'>{listItems}</div>
            );
        } else {
            return <div></div>
        }
    }
}

export default CardsMenu;