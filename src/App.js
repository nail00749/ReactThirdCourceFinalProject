import React, {Component} from "react"
import './App.css'
import './Components/Select'
import Select from "./Components/Select";
import InputFilter from "./Components/InputFilter";
import Logo from "./iconLypa.png"
import CardsMenu from "./Components/CardsMenu";


class App extends Component {
    constructor() {
        super()
        this.GetData()
    }

    state = {
        urlFilters: "https://gist.githubusercontent.com/Wifelly/1bfea8f20244eef1c2cc9c5f552ddde4/raw/e349d7288dee6137939554a4eebc35c3cec707b5/cardsFiltersJson",
        urlCards: "https://gist.githubusercontent.com/Wifelly/e3085716e924e76a3f992cc2a4047b89/raw/d12a5d1dff0e0fde75e6af40a38e9d95e31d0c50/cardsJson",
        dataFilter: "",
        dataCards: null
    }
    Delay(ms) {
        return new Promise(resolve => setTimeout(() => {
        }, ms))
    }

    GetData = () => {
        this.GetDataCards()
        this.GetDataFilters()
    }

    GetDataFilters = () => {
        console.log("StartGetDataFilters...")
        fetch(this.state.urlFilters).then((response) => {
            return response.json()
        })
            .then((data) => {
                this.setState({dataFilter: data})
                console.log(this.state.dataFilter)
            })
    }

    GetDataCards = () => {
        console.log("StartGetDataCards")
        fetch(this.state.urlCards).then((response) =>{
            return response.json()
        }).then((data) =>{
            this.setState({dataCards: data})
            console.log(this.state.dataCards)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="Header">
                    <div className="Search">
                        <p>Поиск по ключевым словам</p>
                        <InputFilter  placeholder="Поиск"></InputFilter>
                    </div>

                    <div className="Filter">
                        <p>Фильтровать статьи по </p>
                        <Select options={this.state.dataFilter.levels}></Select>
                        <Select></Select>
                        <Select></Select>
                    </div>
                </div>
                    <div className={"MainBlock"}>
                        <CardsMenu dataCards={this.state.dataCards}></CardsMenu>
                    </div>

            </div>
        )
    }
}


export default App
