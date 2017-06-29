import React from 'react'
import Card from './Card'
import Hogs from '../porkers_data.js'
import Sorter from './Sorter.js'


export default class CardList extends React.Component {
	constructor() {
		super()

		this.state = {
			cards: []
		}
	}

	componentWillMount() {
		this.setState({cards: Hogs,
			})
	}

	render() {
		var cardsArray = this.state.cards.map(card => <Card image={'../hog-imgs/' + card.name.toLowerCase().split(" ").join("_") + '.jpg'} name={card.name} />)
		console.log(cardsArray)

		return(
			<div>
				{cardsArray}
			</div>
		)
	}
}