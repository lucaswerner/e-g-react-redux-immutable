import * as actionTypes from '../actionTypes/counter';

export const increment = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.INCREMENT
        })
    }
}

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.DECREMENT
        })
    }
}