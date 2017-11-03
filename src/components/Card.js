import React, { Component } from 'react';

const emptyCardUrl = "/img/playing-card-568200_960_720.jpg";

class Card extends Component {
  constructor(props){
    super(props);
    this.flipCard = this.flipCard.bind(this)
  }
  flipCard(){
    this.props.flipCard(this.props.index)
  }
  render() {
    return (
      <div className="card" onClick={this.flipCard}>
        <img src={this.props.card.isVisible ? this.props.card.photoUrl : emptyCardUrl} />
      </div>
    );
  }
}

export default Card;
