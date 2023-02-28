import dataMovie from '../../data/dataMovie.json'
import { CHANGE_CHOOSEN } from '../type/TypeDispatchMovie'


const initState = {
    dataChairs: dataMovie,
    chairChosen: [
        {soGhe: 'A1'}
    ]
}

const MovieReducer = (state=initState, action) => {
    switch(action.type) {
        case CHANGE_CHOOSEN: {
            console.log(action.payload.soGhe);

        }
        default: { 
            return {...state} 
        }
    }
} 

export default MovieReducer