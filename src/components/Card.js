import React from 'react'

export default class Card extends React.Component {

	getImageURL() {
		return this.props.image
	}

	render() {

		return(
			<div className="card">
				<img src={require(this.getImageURL())} alt={this.props.name}/>
				<div className="description">

				</div>
			</div>
		)
	}
}
