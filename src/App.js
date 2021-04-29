import React, {Component} from "react"
import './App.css'
import './Components/Select'
import Select from "./Components/Select";
import InputFilter from "./Components/InputFilter";
import CardsMenu from "./Components/CardsMenu";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urlFilters: "https://gist.githubusercontent.com/Wifelly/1bfea8f20244eef1c2cc9c5f552ddde4/raw/e349d7288dee6137939554a4eebc35c3cec707b5/cardsFiltersJson",
            urlCards: "https://gist.githubusercontent.com/Wifelly/e3085716e924e76a3f992cc2a4047b89/raw/d12a5d1dff0e0fde75e6af40a38e9d95e31d0c50/cardsJson",
            dataFilter: '',
            dataCards: null,
            dict: {
                levels: '',
                categories: '',
                videos: '',
                languages: ''
            }
        }


        this.GetFilterLevels = this.GetFilterLevels.bind(this)
        this.GetFilterCategories = this.GetFilterCategories.bind(this)
        this.GetFilterLanguages = this.GetFilterLanguages.bind(this)
        this.GetFilterVideos = this.GetFilterVideos.bind(this)
        console.log(this.state.dataFilter)
    }

    componentDidMount() {
        this.GetData()
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
        fetch(this.state.urlCards).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({dataCards: data})
        })
    }

    GetFilterLevels(e) {
        let dick = this.state.dict
        dick.levels = e.target.value
        this.setState({dict: dick})
    }

    GetFilterCategories(e) {
        let dick = this.state.dict
        dick.categories = e.target.value
        this.setState({dict: dick})
    }

    GetFilterVideos(e) {
        let dick = this.state.dict
        dick.isVideo = e.target.value
        this.setState({dict: dick})
    }

    GetFilterLanguages(e) {
        let dick = this.state.dict
        dick.languages = e.target.value
        this.setState({dict: dick})
    }


    render() {
        return (
            <div className="App">
                <div className="Header">
                    <div className="Search">
                        <p>Поиск по ключевым словам</p>
                        <InputFilter placeholder="Поиск"/>
                    </div>

                    <div className="Filter">
                        <p>Фильтровать статьи по </p>
                        <Select name={'levels'} onChange={this.GetFilterLevels}
                                options={this.state.dataFilter.levels}/>
                        <Select name={'categories'} onChange={this.GetFilterCategories}
                                options={this.state.dataFilter.categories}/>
                        <Select name={'languages'} onChange={this.GetFilterLanguages}
                                options={this.state.dataFilter.languages}/>
                        <Select name={'videos'} onChange={this.GetFilterVideos}
                                options={this.state.dataFilter.videos}/>
                    </div>
                </div>
                <div className={"MainBlock"}>
                    <CardsMenu dataCards={this.state.dataCards} filters={this.state.dict}/>
                </div>

            </div>
        )
    }
}


export default App
