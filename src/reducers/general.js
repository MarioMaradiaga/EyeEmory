import * as _ from 'lodash';
import initialState from './initialState'

const generalReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FLIP_CARD': 
      return {
        ...state,
        remainingCards: state.remainingCards - 1,
        flippedCards: [...state.flippedCards, action.index],
      }
      case 'SET_ALL_IMAGES': 
        return {
          ...state,
          remainingCards: action.images.length * 2
        }
    case 'TOGGLE_NEXT_PLAYER': 
      return {
        ...state,
        nextPlayerEnabled: !state.nextPlayerEnabled,
      }
    case 'CHANGE_PLAYER': 
      const newCards = []
      const lastTwoFlippedCards = state.flippedCards.slice(state.flippedCards.length - 2);
      state.cards.forEach((card, index) => {
        if(lastTwoFlippedCards.indexOf(index) === -1) {
          newCards.push(card)
        } else {
          newCards.push({
            ...card,
            isVisible: false
          })
        }
      })
      return {
        ...state,
        cards: newCards,
        player: state.player === 'foo' ? 'bar' : 'foo',
        nextPlayerEnabled: !state.nextPlayerEnabled,
        flippedCards: [],
        remainingCards: state.remainingCards + 2,
      }
    case 'ADD_POINT': 
    return {
      ...state,
      points: {
        ...state.points,
        [state.player]: state.points[state.player] + 1
      }
    }
    case 'SET_RESULT': 
    return {
      ...state,
      result: action.result
    }
    case 'RESET_GAME': 
    return {
      ...initialState
    }
  }
  return state;
}

export default generalReducer;