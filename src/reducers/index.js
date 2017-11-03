import { combineReducers } from 'redux'
import images from './images'
import cards from './cards'

const combinedReducer = combineReducers({
  images: images,
  cards: cards
})

export default combinedReducer