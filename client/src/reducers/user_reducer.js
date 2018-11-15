import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    signInError: '',
    signUpError: '',
    signUpCheckMessage: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_USER_SIGN_IN_INFO:
        case types.GET_USER_SIGN_UP_INFO:
            return { ...state, auth: true, signInError: '', signUpError: '' };
        case types.SIGN_OUT:
            return { ...state, auth: false };
        case types.SIGN_IN_ERROR:
            //  deconstruct state to bring all the props over from state.
            return { ...state, auth: false, signInError: action.error }
        case types.SIGN_UP_ERROR:
            return { ...state, auth: false, signUpError: action.error }
        case types.CHECK_USER_SIGN_UP_INFO_SUCCESS:
            return { ...state, signUpCheckMessage: action.payload };
        case types.CHECK_USER_SIGN_UP_INFO_FAIL:
            return { ...state, signUpCheckMessage: action.error };
        default:
            return state;
    }
}