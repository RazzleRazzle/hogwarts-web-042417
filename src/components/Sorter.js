import React from 'react'

export default class Sorter extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
				<div className="btn-group" role="group" aria-label="...">
					<button type="button" className="btn btn-warning" onClick={this.props.isGreased}>Greased Filter</button>
					<button type="button" className="btn btn-warning" onClick={this.props.byName}>Name Sort By</button>
					<button type="button" className="btn btn-warning" onClick={this.props.byWeight}>Weight Sort By</button>
					<button type="button" className="btn btn-warning" onClick={this.props.reset}>Reset</button>
				</div>
		)
	}
}