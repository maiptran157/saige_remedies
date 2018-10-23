import types from '../actions/types';

const DEFAULT_STATE = {
    checkUserSearch: false,
}

export default function checkUserSearch(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case types.CHECK_USER_SEARCH: 
            return { ...state, checkUserSearch: action.payload}
        default:
            return state;
    }
}