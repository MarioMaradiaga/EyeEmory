
const imagesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_ALL_IMAGES': 
    return action.images.map(image => {photoUrl: image.photoUrl})
  }
  return state;
}

export default imagesReducer;