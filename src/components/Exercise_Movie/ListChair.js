import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Chair from './Chair'


class ListChair extends Component {
    
    renderHangGhe = () => {
        return this.props.dataChairs.map((chair, index) => {
            return (
                <div key={index} className='text-center'>
                     <Chair index={index}  chair={chair}/>
                </div>
            )
        })
    }

  render() {
    return (
        <Fragment>
            {this.renderHangGhe()}
        </Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        dataChairs: state.MovieReducer.dataChairs
    }
}

export default connect(mapStateToProps)(ListChair)