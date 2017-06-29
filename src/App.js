import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import CardList from './components/CardList'
// import Card from './components/Card'

class App extends Component {


  render() {
    return (
      <div className="App">
          < Nav />
          <CardList />

      </div>
    )
  }
}



export default App;
