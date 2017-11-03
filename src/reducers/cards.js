import * as _ from 'lodash';

const cardsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_ALL_IMAGES': 
    const allCards = []
    action.images.forEach(image => {
      const newCard = {
        photoUrl: image.photoUrl,
        isVisible: false
      }
      allCards.push(newCard, {...newCard})
    });
    return _.shuffle(allCards);
    case 'FLIP_CARD': 
    const previousCards = state.slice(0,action.index);
    const nextCards = state.slice(action.index+1, state.length);
    const cardToFlip = state[action.index];
    const flippedCard = {
      ...cardToFlip,
      isVisible: !cardToFlip.isVisible
    }
    return [...previousCards, flippedCard, ...nextCards];
  }
  return state;
}

export default cardsReducer;