import React, { Component } from 'react'

import ChairItem from './ChairItem'

export default class Chair extends Component {

  renderChair = () => {
    return this.props.chair.danhSachGhe.map((chairItem, index) => {
     return <ChairItem key={index} location={this.props.location} chairItem={chairItem} />
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


