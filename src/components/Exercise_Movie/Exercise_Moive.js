import React, { Component } from 'react'
import InfoChoosenChair from './InfoChoosenChair';
import ListChair from './ListChair';
import './Movie.css'


export default class Exercise_Moive extends Component {

  render() {
    const styleMovie = {
        position: 'relative',
        backgroundImage: "url('./img/Moive/bgmovie.jpg')",
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
    };
    const wrapper = {
        backgroundColor: 'rgba(0,0,0,0.5)', 
        position: 'absolute', 
        width: '100%', 
        height: '100%',
    };
    
    return (
      <div style={styleMovie}>
        <div style={wrapper}>
            <div className='container'>
                <div className="row">
                    <div className="col-8 ">
                        <h1 className="text-warning  text-center" style={{fontWeight: 'bold', marginBottom: '0'}}>BOOK MOVIE TICKETS</h1>
                        <h2 className='text-light text-center'>Screen</h2>
                                <div className="screen"></div>
                                <ListChair />
                    </div>
                    <div className="col-4 p-2" > 
                        <h2 className='text-warning text-center' style={{fontWeight: 'bold'}}>List Your Chair Chosen</h2>
                        <div>
                            <InfoChoosenChair />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

