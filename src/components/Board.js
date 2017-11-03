import React, { Component } from 'react';
import Card from '../containers/Card';

const fakeCards = [{
  photoUrl: "/img/pexels-photo-106344.jpeg"
}, {
  photoUrl: "/img/pexels-photo-288477.jpeg"
}, {
  photoUrl: "/img/pexels-photo-327533.jpeg"
}, {
  photoUrl: "/img/pexels-photo-355988.jpeg"
}, {
  photoUrl: "/img/pexels-photo-373076.jpeg"
}, {
  photoUrl: "/img/pexels-photo-416405.jpeg"
}, {
  photoUrl: "/img/pexels-photo-443383.jpeg"
}, {
  photoUrl: "/img/pexels-photo-541523.jpeg"
}]

class Board extends Component {
  componentDidMount(){
    console.log(this.props)
    setTimeout(() => {
      this.props.setAllImages(fakeCards)
    }, 2000);
  }
  render() {
    return (
      <div className="card-board">
        {this.props.cards.map((card, index) => <Card index={index} card={card} />)}
      </div>
    );
  }
}

export default Board;
