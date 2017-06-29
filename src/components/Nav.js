import piggy from '../porco.png';
import React from 'react';


const Nav = () => {
  return (
    <div className="well">
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <br/>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
      </div>

    </div>
  )
}

export default Nav
