import types from '../actions/types';

const DEFAULT_STATE = {
    getConditionsList: [],
}

export function getConditionsList(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_CATEGORY_LIST:
            return { ...state, getConditionsList: action.payload}
        default:
            return state;
    }
}