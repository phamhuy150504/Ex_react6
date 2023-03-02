import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Chair from './Chair'


class ListChair extends Component {
    
    renderHangGhe = () => {
        return this.props.dataChairs.map((chair, index) => {
            return (
                <div key={index} className='text-center'>
                     <Chair location={index}  chair={chair}/>
                </div>
            )
        })
    }

  render() {
    return (
        <>  
            {this.renderHangGhe()}
        </>
    )
  }
}

const mapStateToProps = state => {
    return {
        dataChairs: state.MovieReducer.dataChairs
    }
}

export default connect(mapStateToProps)(ListChair)