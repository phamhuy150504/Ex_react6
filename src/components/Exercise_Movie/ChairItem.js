import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTickets } from '../../Redux/actions/Action_Movie'

class ChairItem extends Component {

  renderButton = () => {
    const {location, chairItem, chairChosen } = this.props
    let styleChairChosen = ''
    let disable = false
    
    if (chairItem.daDat) {
      styleChairChosen = 'gheDuocChon' 
      disable = true
    } 
    console.log(disable);
    chairItem.daDat ? styleChairChosen = 'gheDuocChon' : styleChairChosen = ''

    let styleChairChoosing = ''
    let index = chairChosen.findIndex(chairChosen => {
      return chairChosen.soGhe === chairItem.soGhe 
    }) 

    if(index !== -1 ) {
      styleChairChoosing = 'gheDangChon'
    }

    if (location === 0) {
      return (
        <span className='rowNumber'>
          {chairItem.soGhe}
        </span>
      )
    } else {
      return (
        <button onClick={() => this.props.handleAddTickets(chairItem)} className={`ghe ${styleChairChosen} ${styleChairChoosing}
                   `} disabled={disable}>
          {chairItem.soGhe}
        </button>
      )
    }
  }

  render() {
    return (
      <>
        {this.renderButton()}
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    chairChosen: state.MovieReducer.chairChosen 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddTickets: payload => {
      dispatch(addTickets(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChairItem)