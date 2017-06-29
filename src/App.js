import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import CardList from './components/CardList'
import Sorter from './components/Sorter'
import Card from './components/Card'
import Hogs from './porkers_data.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
			isGreased: false,
			byName: false,
			byWeight: false
    }
  }

	componentWillMount() {
		this.setState({
      cards: Hogs
		})
	}

	reset = () => {
    this.setState ( {
		  isGreased: false,
		  byName: false,
	  	byWeight: false
	  })

  }

	isGreased = () => {this.setState({ isGreased: !this.state.isGreased })}
	byName = () => {this.setState({byName: !this.state.byName })}
	byWeight = () => {this.setState({byWeight: !this.state.byWeight })}

  cardsArray () {
		var cards = (this.state.cards.map(card => <Card image={card.name.toLowerCase().split(" ").join("_")} info={card}/>))

		if (this.state.isGreased) {
			 cards = cards.filter(function (el) {
				return el.props.info.greased === true
			})
		}

		if (this.state.byName) {
			cards = cards.sort(function (a, b) {
				if (a.props.info.name < b.props.info.name) return -1;
				if (a.props.info.name > b.props.info.name) return 1;
				return 0;
			})
		}

		if ( this.state.byWeight) {
		  var weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
			cards = cards.sort(function (a, b) {
				if (a.props.info[weight] < b.props.info[weight]) return -1;
				if (a.props.info[weight] > b.props.info[weight]) return 1;
				return 0;
			})
		}
		return cards
	}

  render() {
    return (
      <div className="App">
        <div className="well">
          < Nav />
          < Sorter isGreased={this.isGreased} byName={this.byName} byWeight={this.byWeight} reset={this.reset}/>
        </div>
          < CardList cardsArray={this.cardsArray()} />
      </div>
    )
  }
}

export default App;
