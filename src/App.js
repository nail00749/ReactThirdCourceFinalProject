import React, {Component} from "react"
import './App.css'
import './Components/Select'
import Select from "./Components/Select";


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
        })
    }

    render() {
        return (
            <div>
                <div className={"header"}>
                    <div>
                        <h2>Поиск по ключевым словам</h2>
                        <input type={"text"}/>
                    </div>
                    <div>
                        <h2>Фильтровать статьи по </h2>
                        <Select></Select>
                        <Select></Select>
                        <Select></Select>
                    </div>
                    <div className={"MainBlock"}>

                    </div>
                </div>
            </div>
        )
    }
}


export default App
