import types from '../actions/types';

const DEFAULT_STATE = {
    conditionList: [],
}

export default function getConditionsList(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_CONDITIONS_LIST:
            return { ...state, conditionList: action.payload}
        default:
            return state;
    }
}