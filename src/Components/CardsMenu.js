import React from "react";
import "./CardsMenu.css"

class CardsMenu extends React.Component {

    constructor(props) {
        super();
        this.state ={
            count: 2
        }

    }

    increaseCounter = () => {
        let newCount = this.state.count + 300
        this.setState({count: newCount})
    }

    render() {
        if (this.props.dataCards) {
            let listItems = this.props.dataCards.map((dataCards) =>
                <div key={dataCards.id} className={dataCards.id > this.state.count ? "hidden" : "Card"}>
                    <div className="CardImage ">
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
                <div>
                    <div className='CardsMenu'>
                        {listItems}
                    </div>
                    <div>
                        <button onClick={this.increaseCounter} className="button">Показать больше</button>
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default CardsMenu;