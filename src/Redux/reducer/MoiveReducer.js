import dataMovie from '../../data/dataMovie.json'
import { ADD_TICKETS, REMOVE_TICKET } from '../type/TypeDispatchMovie'


const initState = {
    dataChairs: dataMovie,
    chairChosen: [
        
    ]
}

const MovieReducer = (state=initState, action) => {
    switch(action.type) {
        case ADD_TICKETS : {
            let cloneChairChosen = [...state.chairChosen]
            let index = cloneChairChosen.findIndex(chair => chair.soGhe === action.payload.soGhe)
            index !== -1 ? cloneChairChosen.splice(index, 1) : cloneChairChosen.push(action.payload)
        
            return {
                ...state, chairChosen: cloneChairChosen
            }
        } case REMOVE_TICKET : {
            let cloneChairChosen = [...state.chairChosen]
            let index = cloneChairChosen.findIndex(chair => chair.soGhe === action.payload.soGhe)
            index !== -1 && cloneChairChosen.splice(index, 1)
            return {
                ...state, chairChosen: cloneChairChosen
            }
        }
        default: { 
            return {...state} 
        }
    }
} 

export default MovieReducer