import * as actionTypes from '../actionTypes/counter';
import { Map } from 'immutable';

const initialState = Map({
    count: 0
})

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state.update('count', n => n + 1);
            

        case actionTypes.DECREMENT:
            return state.update('count', n => n -1);

        default:
            return state;
    }
}