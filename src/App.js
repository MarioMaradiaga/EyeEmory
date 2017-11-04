import React, { Component } from 'react';
import Board from './containers/Board'
import './css/App.css';


class App extends Component {
  render() {
    return [
        <div className="header">
          <span>Concentration</span>
        </div>,
        <div className="body">
          <Board />
        </div>, 
        <div className="footer">
          By Mario Maradiaga
        </div>

    ];
  }
}

export default App;
