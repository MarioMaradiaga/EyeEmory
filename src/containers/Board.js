import { connect } from 'react-redux'
import { setAllImages } from '../actions'
import Board from '../components/Board'


const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAllImages: images => {
      dispatch(setAllImages(images))
    }
  }
}

const VisibleBoard = connect(mapStateToProps, mapDispatchToProps)(Board)

export default VisibleBoard
