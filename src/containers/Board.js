import { connect } from 'react-redux'
import { setAllImages, flipCard, toggleNextPlayer, changePlayer, addPoint, resetGame } from '../redux/actions'
import Board from '../components/Board'


const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    setAllImages: images => {
      dispatch(setAllImages(images))
    },
    flipCard: index => {
      dispatch(flipCard(index))
    },
    toggleNextPlayer: () => dispatch(toggleNextPlayer()),
    changePlayer: () => dispatch(changePlayer()),
    addPoint: () => dispatch(addPoint()),
    resetGame: (result) => dispatch(resetGame(result)),
  }
}

const VisibleBoard = connect(mapStateToProps, mapDispatchToProps)(Board)

export default VisibleBoard
