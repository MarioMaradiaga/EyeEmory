import { combineReducers } from 'redux'
import general from './general'
import images from './images'
import cards from './cards'
import initialState from './initialState'

const combinedReducer = combineReducers({
  images: images,
  cards: cards
});

export default (state, action) => {
  console.log('NUEVOOOO',state)
  const middleState = combinedReducer(state, action);
  console.log('MIDDEL', middleState)
  return general({...initialState, ...state, ...middleState}, action)
}