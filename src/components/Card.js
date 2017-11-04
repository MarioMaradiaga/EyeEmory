import React, { Component } from 'react';
import { connect } from 'react-redux'

const emptyCardUrl = "/img/playing-card-568200_960_720.jpg";

const mapStateToProps = state => state;

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      style: {
        className: '',
        transform: ''
      }
    }
    this.flipCard = this.flipCard.bind(this)
  }
  componentDidMount(){
    this.setState({
      style: {
        transform: `translate(${this.props.parentDimensions[0] / 2 - (this.cardDiv.offsetLeft - this.props.parentOffset[0])}px, 
          ${this.props.parentDimensions[1] / 2 - (this.cardDiv.offsetTop - this.props.parentOffset[1])}px)`
      }
    })
    
    setTimeout(() => {
      this.setState({
        className: 'transition',
        style: {
          transform: `rotate(${Math.floor(Math.random() * 60) - 30}deg)`
        }
      });
    }, this.props.index * 200);
  }
  flipCard(){
    if(!this.props.nextPlayerEnabled && !this.props.result && this.props.flippedCards.indexOf(this.props.index) === -1) {
      this.props.flipCard(this.props.index)
    }
  }
  render() {
    const src = this.props.card.isVisible ? this.props.card.thumbUrl : emptyCardUrl;
    return (
      <div ref={(ref) => {this.cardDiv = ref }} className={`concentration-card ${this.state.className}`} style={this.state.style} onClick={this.flipCard}>
        <img alt={src} src={src} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Card);
