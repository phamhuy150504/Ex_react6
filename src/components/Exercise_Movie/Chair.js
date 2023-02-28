import React, { Component } from 'react'
import {connect} from 'react-redux'
import { changeChoosen } from '../../Redux/actions/Action_Movie'
class Chair extends Component {
  state = {
    styleChairChoosing: ''
  }
  

    renderChair = () => {
        return this.props.chair.danhSachGhe.map((chair, index) => {
            let styleChairChosen = ''
            let styleChairChoosing = ''

            chair.daDat ? styleChairChosen = 'gheDuocChon' : styleChairChosen = ''
          
            let handleChairChoosing = () => {
              let location = this.props.chairChosen.findIndex(seat => seat.soGhe === chair.soGhe) 
              console.log(location);
              if (location !== -1 ) {
                styleChairChoosing = 'gheDangChon'
              }
              console.log(styleChairChoosing);
            }
            // onClick={(e) => {
            //   let location = this.props.chairChosen.findIndex(seat => seat.soGhe === chair.soGhe) 
            //   if (location !== -1 ) {
            //       styleChairChoosing = 'gheDangChon'
            //   }
            //   console.log(location);
            //   console.log(e.target.className)
            //   console.log(styleChairChoosing);
            // }}

            if (this.props.index === 0) {
              return (
                <span className='rowNumber' key={index}>
                  {chair.soGhe}
                </span>
              )
            } else {
                return (
                  <button onClick={() => handleChairChoosing()} key={index} className={`ghe ${styleChairChosen} 
                  ${styleChairChoosing}`}>
                    {chair.soGhe}
                </button>
                )
            }
        })
    }
  render() {
    return (
      <div className='text-warning mt-2' style={{fontSize: '30px', fontWeight: 'bold'}}>
         {this.props.chair.hang}   {this.renderChair()}
      </div>
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
    handleChoosen : payload => {
      dispatch(changeChoosen(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chair)