import React from 'react'

export default class Sorter extends React.Component {
	sortPigs() {
	}

	render() {
		return(
			<div>
				<button className="sort-weight">Weight</button>
				<button className="sort-name">Name</button>
				<input className="greased" type="checkbox"/>
			</div>
		)
	}
}