import React from "react";
import "./CardsMenu.css"

class CardsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 2
        }
    }

    increaseCounter = () => {
        let newCount = this.state.count + 300
        this.setState({count: newCount})
    }

    filterList = (list, filters) => {
        console.log(this.props.filters)
        console.log(list)

        if (filters.levels !== "") {
            list = list.filter((item) => item.level == filters.levels)
        }
        if (filters.languages !== "") {
            list = list.filter((item) => item.language == filters.languages)
        }
        if (filters.categories !== "") {
            list = list.filter((item) => item.category == filters.categories)
        }
        if (filters.isVideo !== "") {
            list = list.filter((item) => item.isVideo.toString() == filters.isVideo)
        }
        console.log('list1', list)
        return list
    }


    render() {
        if (this.props.dataCards) {
            let listF = this.filterList(this.props.dataCards, this.props.filters)
            let listItems = listF.map((dataCards, i) =>
                <div key={dataCards.id} className={i > this.state.count ? "hidden" : "Card"} onClick={this.props.click}>
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
                    <button onClick={this.increaseCounter} className="button">Показать больше</button>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default CardsMenu;