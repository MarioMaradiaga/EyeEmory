export const setAllImages = (images) => {
  return {
    type: 'SET_ALL_IMAGES',
    images: images
  }
}

export const flipCard = (index) => {
  return {
    type: 'FLIP_CARD',
    index: index
  }
}
