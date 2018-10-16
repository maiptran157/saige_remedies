import types from '../actions/types';

const DEFAULT_STATE = {
    categories: [],
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_CATEGORY_LIST:
            console.log(action.payload)
            return { ...state, categories: action.payload };
        default:
            return state;
    }
}