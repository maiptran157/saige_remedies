import types from '../actions/types';

const DEFAULT_STATE = {
    checkUserSearch: false,
}

export default function checkUserSearch(state = DEFAULT_STATE, action) {
    switch(action.type) {
        default:
            return state;
    }
}