import React from "react";
import "./CardsMenu.css"

class CardsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 2,
            images: ['https://sun9-59.userapi.com/impg/W0jlg8LiqlLMUNzgb_zUM6IGv6QEKZZj1Lb08g/yTN939Wnq34.jpg?size=403x343&quality=96&sign=42cc8c3f7ae969cf5e792d267e189bd2&type=album',
            'https://sun9-52.userapi.com/impg/NgJISu3TJvuhDZvXbGe0mTM5rdgd1idmO02B1w/R-h1irLrCh0.jpg?size=978x1080&quality=96&sign=8433f9b209bf58485615f03013884afd&type=album',
            'https://sun9-38.userapi.com/impg/Gag99FCPvSyOi-Xwgenp5aEm8uLeliIHUOzo1g/uLQS7OjVaZc.jpg?size=873x1080&quality=96&sign=025802739c5eae2052a538d0a42bb043&type=album',
            'https://sun9-19.userapi.com/impg/NvdTnBRiWjMRrOaMdHg6Rnhb5c5OBHeyquwnOg/7njsEUIEVW4.jpg?size=800x800&quality=96&sign=0c51e31cc46c85a288e4e9a32e9c1b04&type=album',
            'https://sun9-30.userapi.com/impg/mT5IZidLXgvaiDMSAHveDali3koIuvq-d90TPA/KPB_5Jiu2uY.jpg?size=700x750&quality=96&sign=a4f22851739a1ce88226e88212086d02&type=album',
            'https://sun9-11.userapi.com/impg/cN9X8Q7uk_sPI4B-7zvtAb1jEoULWufFjjM0Iw/YtfmfRTNwyA.jpg?size=508x194&quality=96&sign=a4a690f502b3bc5b23eca980d8ebb6fa&type=album',
            'https://sun9-54.userapi.com/impg/kUhXbpMXTkAeSsZzTQVKaD33nsKr3K2DwBnTHA/m-tihTDgXiU.jpg?size=900x650&quality=96&sign=6cbbb7250cbc4db8e7602dee51cc62fe&type=album',
            'https://sun9-33.userapi.com/impg/CzVjtdmNngKJ5CQ8lMtHikS4G38dugsiu8mc7g/Td9r2IvGxEM.jpg?size=640x426&quality=96&sign=6b8f2fe37889d141aeaa8b71702bc1fd&type=album']
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
        if (filters.word !=="") {
            list = list.filter((item) =>item.text.includes(filters.word))
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
                        <img src={this.state.images[dataCards.id % 8]}
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