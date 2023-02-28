import React, { Component } from 'react'

export default class InfoChoosenChair extends Component {
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
