import types from '../actions/types';

const DEFAULT_STATE = {
    symptomId: '',
    categoryId: '',
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_SEARCH_SYMPTOM:
            return { ...state, symptomId: action.payload.data.symptom_id, categoryId: action.payload.data.category_id}
        default: 
            return state;
    }
}