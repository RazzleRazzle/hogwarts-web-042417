import React from 'react'

export default class Card extends React.Component {

	getImageURL() {
			var image = (this.props.image)
			console.log(image)

		return image
	}

	render() {

		return(
			<div className="card">
				<img src={this.getImageURL()} alt={this.props.name}/>
				<div className="description">
					{this.props.name}
				</div>
			</div>
		)
	}
}
