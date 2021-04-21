import React, {Component} from "react"
import './App.css'
import './Components/Select'
import Select from "./Components/Select";
import InputFilter from "./Components/InputFilter";
import Logo from "/public/iconLypa.png"
import CardsMenu from "./Components/CardsMenu";


class App extends Component {


    constructor() {
        super()
        this.GetData()
    }

    state = {
        urlFilters: "https://api.jsonbin.io/b/5d4beaabf090a433857b567a/latest",
        urlCards: "https://api.jsonbin.io/b/5d4be91d00947c04a5a75da2/latest",
        dataFilter: null,
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
                        <InputFilter img={Logo} placeholder="Поиск"></InputFilter>
                    </div>

                    <div className="Filter">
                        <p>Фильтровать статьи по </p>
                        <Select></Select>
                        <Select></Select>
                        <Select></Select>
                    </div>
                    <div className={"MainBlock"}>
                        <CardsMenu dataCards={this.state.dataCards}></CardsMenu>
                    </div>
                </div>
            </div>
        )
    }
}


export default App
