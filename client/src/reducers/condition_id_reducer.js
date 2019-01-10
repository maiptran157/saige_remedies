import types from '../actions/types';

const DEFAULT_STATE = {
    conditionsID: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_CONDITIONS_ID: 
            return {...state, conditionsID: action.payload}
        default:
            return state;
    }
}