import React from 'react'

export default class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			toggleInfo: false,
			hidden: false
		}
	}

	getImageURL() {
		return (require("../hog-imgs/" + this.props.image + ".jpg"))
	}

	handleInfo= () => {
		this.setState({
			toggleInfo: !this.state.toggleInfo
		})
	}

	handleHider = () => {
		this.setState({
			hidden: !this.state.hidden
		})
	}

	displayDetails = () => {
		if (!this.state.toggleInfo) {
			return (<button className="btn btn-info" role="Piggy Details" onClick={this.handleInfo}>
				Details &nbsp;
				<span className="caret"></span>
			</button>)
		} else {
			return (
				<div className="dropup">
					<button className="btn btn-info" role="Piggy Details" onClick={this.handleInfo}>
						Collapse &nbsp;
						<span className="caret"></span>
					</button>
					<div>
						<h3>Piggy Info</h3>
						<ul >
							<li>Greased: {this.props.info.greased ? 'yea baby' : 'naw son'}</li>
							<li>
								Weight: {this.props.info['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
							<li>Specialty: {this.props.info.specialty}</li>
							<li>Highest Medal Achieved: {this.props.info['highest medal achieved']}</li>
						</ul>
					</div>
				</div>
			)
		}
	}

	displayCard = () =>  {
		if (this.state.hidden) {

		} else {
		return (	<div className="col-sm-6 col-md-4">
				<div className="thumbnail" style={{backgroundColor: 'gold'}}>
					<i className="glyphicon glyphicon-remove" onClick={this.handleHider} ></i>
					<img src={this.getImageURL()} alt={this.props.info.name}/>
					<div className="caption">
						<h3>{this.props.info.name}</h3>
						<p>This little piggy went to market</p>
						<div>{this.displayDetails()}</div>
					</div>
				</div>
			</div>
		)}
	}


	render() {

		return(
			<div>
				{this.displayCard()}
			</div>
		)
	}

}



