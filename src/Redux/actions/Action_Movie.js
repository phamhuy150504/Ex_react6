import {  ADD_TICKETS, REMOVE_TICKET } from "../type/TypeDispatchMovie"

export const removeTicket = payload => {
    return {
        type: REMOVE_TICKET,
        payload
    }
}

export const addTickets = payload => {
    return {
        type: ADD_TICKETS,
        payload
    }
}