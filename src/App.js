import React, { Component } from 'react';
import Board from './containers/Board'
import './css/App.css';


class App extends Component {
  render() {
    return [
        <div key="header" className="header">
          <span>Concentration</span>
        </div>,
        <div key="body" className="body">
          <Board />
        </div>, 
        <div key="footer" className="footer">
          By Mario Maradiaga
        </div>

    ];
  }
}

export default App;
