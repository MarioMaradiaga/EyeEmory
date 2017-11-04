import React, { Component } from 'react';
import Card from '../components/Card';
import 'whatwg-fetch';
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
    this.requestImages();
  }

  componentWillReceiveProps(props) {
    if (props.remainingCards === 0) {
      this.determineResult(props.points);
    }
  }

  onFlipCard(index) {
    const flippedCardsIsEven = this.props.flippedCards.length % 2 === 0;
    if (flippedCardsIsEven) {
      this.props.flipCard(index);
    } else {
      const lastFlippedCard = this.props.cards[this.props.flippedCards[this.props.flippedCards.length - 1]]
      if (lastFlippedCard.thumbUrl === this.props.cards[index].thumbUrl) {
        console.log('a')
        this.props.flipCard(index);
        this.props.addPoint();
      } else {
        console.log('b')
        this.props.flipCard(index);
        this.props.toggleNextPlayer();
      }
    }
  }

  onNextTurn() {
    this.props.changePlayer();
  }

  requestImages() {
    fetch('https://api.eyeem.com/v2/photos/popular?client_id=9iNUTAc4FCsRj5Co6vJgzVySHxuJtL3Y&limit=10', {
      method: 'GET'
    }).then((result) => {
      return result.json()
    }).then((parsedResult) => {
      this.props.setAllImages(parsedResult.photos.items);
    })
  }

  determineResult(points) {
    let result;
    if (points.foo === points.bar) {
      result = 'Draw!'
    } else {
      const winner = points.foo > points.bar ? 'foo' : 'bar';
      result = `Winner: ${winner}!`;
    }
    this.setState({
      result
    })
  }

  onPlayAgain() {
    this.setState({
      ...initialState
    })
    this.props.resetGame();
  }
  render() {
    return ([
      <div key="board-header" className="board-header">
        <div className="board-info">
          <h2>{!this.state.result ? 'Current player: ' + this.props.player : this.state.result}</h2>
          <table>
            <thead>
              <tr>
                <th>foo</th>
                <th>bar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{this.props.points.foo}</th>
                <th>{this.props.points.bar}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="board-actions">
          {this.props.nextPlayerEnabled ? (
            <button className="btn" disabled={!this.props.nextPlayerEnabled} onClick={this.onNextTurn}>
              Next Player: {this.props.player === 'foo' ? 'bar' : 'foo'}!
          </button>
          ) : null}
          {this.state.result ? (<button className="btn" onClick={this.onPlayAgain}>
            Play Again!
          </button>) : null}

        </div>
      </div>,
      <div key="concentration-board" ref={(ref) => { this.parentDiv = ref }} className="concentration-board">
        {this.props.cards.map((card, index) =>
          <Card
            key={index}
            index={index}
            card={card}
            parentDimensions={[this.parentDiv.clientWidth, this.parentDiv.clientHeight]}
            parentOffset={[this.parentDiv.offsetLeft, this.parentDiv.offsetTop]}
            result={this.state.result}
            flipCard={this.onFlipCard}
          />)}
      </div>
    ]
    );
  }
}

export default Board;
