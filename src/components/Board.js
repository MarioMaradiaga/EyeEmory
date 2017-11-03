import React, { Component } from 'react';
import Card from '../components/Card';

const fakeCards = [{
  photoUrl: "/img/pexels-photo-106344.jpeg"
}, {
  photoUrl: "/img/pexels-photo-288477.jpeg"
}]

const initialState = {
  result: "",
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }

    this.onFlipCard = this.onFlipCard.bind(this);
    this.onNextTurn = this.onNextTurn.bind(this);
    this.onPlayAgain = this.onPlayAgain.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.setAllImages(fakeCards)
    }, 2000);
  }

  componentWillReceiveProps(props){
    if(props.remainingCards === 0) {
      this.determineResult();
    }
  }

  onFlipCard(index) {
    const flippedCardsIsEven = this.props.flippedCards.length % 2 === 0;
    if (flippedCardsIsEven) {
      this.props.flipCard(index);
    } else {
      const lastFlippedCard = this.props.cards[this.props.flippedCards[this.props.flippedCards.length - 1]]
      if (lastFlippedCard.photoUrl === this.props.cards[index].photoUrl) {
        this.props.flipCard(index);
        this.props.addPoint();
      } else {
        this.props.flipCard(index);
        this.props.toggleNextPlayer();
      }
    }
  }

  onNextTurn() {
    this.props.changePlayer();
  }
  determineResult(){
    let result;
    if(this.props.points.foo === this.props.points.bar) {
      result = 'Draw!'
    } else {
      const winner = this.props.points.foo > this.props.points.bar ? 'foo' : 'bar';
      result = `Winner: ${winner}!`;
    }
    this.setState({
      result
    })
  }

  onPlayAgain(){
    this.setState({
      ...initialState
    })
    this.props.resetGame();
    this.props.setAllImages(fakeCards);
  }
  render() {
    return ([
      <div className="board-header">
        {!this.state.result ? [
          <h2>Current player: {this.props.player}</h2>,
          <h3>Points: {this.props.points[this.props.player]}</h3>
        ] : [
          <h2>{this.state.result}</h2>,
          <button onClick={this.onPlayAgain}>
            Play Again!
          </button>
        ]}

        {this.props.nextPlayerEnabled ? (
          <button disabled={!this.props.nextPlayerEnabled} onClick={this.onNextTurn}>
            Next Player!
          </button>
        ): null}
        
      </div>,
      <div className="card-board">
        {this.props.cards.map((card, index) => <Card result={this.state.result} flipCard={this.onFlipCard} index={index} card={card} />)}
      </div>
    ]
    );
  }
}

export default Board;
