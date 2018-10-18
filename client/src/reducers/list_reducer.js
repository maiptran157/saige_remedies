import types from '../actions/types';

const DEFAULT_STATE = {
    reviewList: [],
    review: {}
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_REVIEW_LIST:
            console.log('REDUCER ACTION:', action);
            return { ...state, reviewList: action.payload }
        case types.ADD_REVIEW:
            console.log(action);
        case types.GET_SINGLE_REVIEW:
            console.log(action);
        default:
            return state;
    }
}