import { connect } from 'react-redux'
import { flipCard } from '../actions'
import Card from '../components/Card'


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    flipCard: index => {
      dispatch(flipCard(index))
    }
  }
}

const VisibleCard = connect(mapStateToProps, mapDispatchToProps)(Card)

export default VisibleCard
