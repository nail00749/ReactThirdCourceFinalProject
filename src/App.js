import React, {Component} from "react";
import './App.css';
import MainPanel from "./Components/MainPanel";

class App extends Component {

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
            return response.json();
        })
            .then((data) => {
                this.setState({dataFilter: data})
            });
    }

    GetDataCards = () => {
        console.log("StartGetDataCards")
        fetch(this.state.urlCards).then((response) =>{
            return response.json()
        }).then((data) =>{
            this.setState({dataCards: data})
        })
    }


    GetData = () => {

    }

    render() {
        return (
            <div>
                <button onClick={this.GetDataFilters}>Get Filters</button>
                <button onClick={this.GetDataCards}>Get Cards</button>
                <button onClick={this.GetData}>ConsoleLogData</button>
            </div>
        );
    }
}


export default App;
