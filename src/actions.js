export const setAllImages = images => ({
  type: 'SET_ALL_IMAGES',
  images
});

export const flipCard = index => ({
  type: 'FLIP_CARD',
  index
});

export const toggleNextPlayer = () => ({
  type: 'TOGGLE_NEXT_PLAYER'
});


export const changePlayer = () => ({
  type: 'CHANGE_PLAYER'
});

export const addPoint = () => ({
  type: 'ADD_POINT'
});


export const setResult = (result) => ({
  type: 'SET_RESULT',
  result
});
export const resetGame = (result) => ({
  type: 'RESET_GAME',
  result
});
