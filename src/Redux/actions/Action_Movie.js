import { CHANGE_CHOOSEN } from "../type/TypeDispatchMovie"

export const changeChoosen = payload => {
    return {
        type: CHANGE_CHOOSEN, 
        payload
    }
}