import React from 'react'
import App from '../App'
import Card from './Card'
import Hogs from '../porkers_data.js'
import Sorter from './Sorter.js'


export default class CardList extends React.Component {
	constructor() {
		super()

		this.state = {
			cards: [],
		}
	}



	render() {


		return(
			<div>
				<div className="container">
					<div className="row">
						{this.props.cardsArray}
					</div>
				</div>
			</div>

		)
	}
}