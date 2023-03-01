import React, { Component } from 'react'
import {connect} from 'react-redux'
import { removeTicket } from '../../Redux/actions/Action_Movie'

 class InfoChoosenChair extends Component {
    renderChairChosen = () => {
        return this.props.chairChosen.map((chair, index) => {
            const {soGhe, gia} = chair
            return (
                <tr className='text-white' key={index}>
                    <td>{soGhe}</td>
                    <td>{gia.toLocaleString()}</td>
                    <td><button onClick={() => {
                        this.props.handleRemove(chair)
                    }} className='btn btn-danger'>Remove</button></td>
                </tr>
            )
        })
    }


    handleTotalTickets = () => {
        return this.props.chairChosen.reduce((init, item) => {
            return init += item.gia
        }, 0)
    }


    render() {
        const styleSpan = {
            fontSize: '18px',
            fontWeight: 'bold'
        }
    
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span className='text-light' style={styleSpan}>Chair Chosen</span> <br />
                    <button className='gheDangChon'></button> <span className='text-light' style={styleSpan}>Chair Choosing</span> <br />
                    <button className='ghe' style={{ marginLeft: '0' }}></button> <span className='text-light' style={styleSpan}>Chair</span>
                </div>
                <div className='mt-5' >
                    <table className="table " border={3}>
                        <thead className='text-light' style={{fontSize:'30px'}}>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderChairChosen()}
                        </tbody>
                        <tfoot className='text-white'>
                            <td colspan='2'style={{fontWeight: 'bold', fontSize: '20px', color:'orange'}}>Total</td>
                            <td style={{fontWeight: 'bold', fontSize: '20px', color:'orange'}}>{this.handleTotalTickets().toLocaleString() + ' VND'}</td>
                        </tfoot>
                    </table>
                </div>
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
        handleRemove: payload => {
            dispatch(removeTicket(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoChoosenChair)