import React, {Component} from "react";
import './App.css';
import MainPanel from "./Components/MainPanel";

class App extends Component {

    state = {
        urlFilters: "https://api.jsonbin.io/b/5d4beaabf090a433857b567a/latest",
        urlCards: "https://api.jsonbin.io/b/5d4be91d00947c04a5a75da2/latest",
        dataFilter: null,

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
                console.log(data);
                this.setState({dataFilter: data})
                console.log(this.state.dataFilter);
            });
    }


    GetData = () => {
        console.log(this.state.dataFilter.videos)
        MainPanel.bind(this.state.dataFilter.videos)
    }

    render() {
        return (
            <div>
                <MainPanel data={this.state.dataFilter}></MainPanel>
                <button onClick={this.GetDataFilters}>GetFilters</button>
                <button onClick={this.GetData}>ConsoleLogData</button>
            </div>
        );
    }
}


export default App;
