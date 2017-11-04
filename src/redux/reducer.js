import * as _ from 'lodash';

const initialState = {
  player: "foo",
  points: {
    foo: 0,
    bar: 0
  },
  remainingCards: 0,
  result: null,
  cards: [],
  flippedCards: [],
  nextPlayerEnabled: false
}

const setImages = (images) => {
  const allCards = []
  images.forEach(image => {
    const newCard = {
      thumbUrl: image.thumbUrl,
      isVisible: false
    }
    allCards.push(newCard, { ...newCard })
  });
  return {
    images: images.map(image => ({thumbUrl: image.thumbUrl})),
    cards: allCards,
    remainingCards: images.length * 2
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_IMAGES':
      return {
        ...state,
        ...setImages(action.images),
      };
    case 'FLIP_CARD':
      const previousCards = state.cards.slice(0, action.index);
      const nextCards = state.cards.slice(action.index + 1, state.cards.length);
      const cardToFlip = state.cards[action.index];
      const flippedCard = {
        ...cardToFlip,
        isVisible: !cardToFlip.isVisible
      }
      return {
        ...state,
        cards: [...previousCards, flippedCard, ...nextCards],
        remainingCards: state.remainingCards - 1,
        flippedCards: [...state.flippedCards, action.index],
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
        if (lastTwoFlippedCards.indexOf(index) === -1) {
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
        ...initialState,
        ...setImages(state.images)
      }
  }
  return state;
}

export default reducer;