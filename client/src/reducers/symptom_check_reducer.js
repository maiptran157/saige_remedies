import types from '../actions/types';

const DEFAULT_STATE = {
    symptomCheckResult: [],
    symptomCheckError: [],
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_SYMPTOM:
            console.log('SYMPTOM REDUCER ACTION:', action);
            return { ...state, symptomCheckResult: action.payload };
        case types.GET_SYMPTOM_ERROR:
            console.log('SYMPTOM REDUCER ACTION:', action);
            return { ...state, symptomCheckError: action.error };
        default:
            return state;
    }
}