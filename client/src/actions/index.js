import types from './types';
import axios from 'axios';
import config from '../config';
import { formatPostData } from '../helpers';


export const addReview = (reviewInfo) => async dispatch => {
    const dataToSend = formatPostData({
        review: reviewInfo.review,
        rating: reviewInfo.rating,
        remedy_id: reviewInfo.id,
    })
    try {
        const response = await axios.post(config.ADD_REVIEW_URL, dataToSend);
        // console.log("response from addReview axios call:", response)
        dispatch({
            type: types.ADD_REVIEW,
            payload: response
        })
    } catch (error) {
        console.log('Error Message:', error.message);
    }
}

export const getReviewList = (id) => async dispatch => {
    const dataToSend = formatPostData({ ID: id })
    try {
        const response = await axios.post(config.REMEDY_DETAIL_URL, dataToSend);
        let reviewList = response.data.reviews
        dispatch({
            type: types.GET_REVIEW_LIST,
            payload: reviewList
        });
    } catch (error) {
        console.log('Error Message:', error.message);
    }
}

export const getCategoryList = () => async dispatch => {
    try {
        const response = await axios.get(`${config.CATEGORY_URL}`);

        dispatch({
            type: types.GET_CATEGORY_LIST,
            payload: response.data,
        })
    } catch (err) {
        console.log('Error Message:', err.message);
    }
}

export const getConditionsList = (id) => async dispatch => {
    const dataToSend = formatPostData({ ID: id });

    try {
        const response = await axios.post(`${config.CONDITIONS_URL}`, dataToSend)

        dispatch({
            type: types.GET_CONDITIONS_LIST,
            payload: response.data,
        })
    } catch (error) {
        console.log('Error Message:', error.message);
    }
}

export const userSearchTerm = (term) => async dispatch => {

    const dataToSend = formatPostData({ search_term: term });

    try {
        const response = await axios.post(`${config.SEARCH_SYMPTOM_URL}`, dataToSend);
        console.log(response);
        dispatch({
            type: types.GET_SEARCH_SYMPTOM,
            payload: response,
        })

    } catch (error) {
        console.log('Error Message:', error.message);
    }
}

export const userSignInInfo = (userInfo) => async dispatch => {
    // console.log("User info:", userInfo);
    const dataToSend = formatPostData(userInfo);

    try {
        const response = await axios.post(`${config.GET_USER_SIGN_IN_INFO}`, dataToSend);
        localStorage.setItem('loggedin', response.data.loggedin);
        localStorage.setItem('username', response.data.userData.username);
        localStorage.setItem('email', response.data.userData.email);
        localStorage.setItem('firstName', response.data.userData.fname)
        dispatch({
            type: types.GET_USER_SIGN_IN_INFO,
            payload: response,
        })

    } catch (error) {
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Error signing in'
        })
    }
}

export const userSignUpInfo = (userInfo) => async dispatch => {
    const dataToSend = formatPostData(userInfo);

    try {
        const response = await axios.post(`${config.GET_USER_SIGN_UP_INFO}`, dataToSend);
        dispatch({
            type: types.GET_USER_SIGN_UP_INFO,
            payload: response.data.message,
        })
    } catch (error) {
        dispatch({
            type: types.SIGN_UP_ERROR,
            error: 'Error signing up'
        })
    }
}

export const checkUserLoginStatus = (userInfo) => async dispatch => {
    const dataToSend = formatPostData({ userData: userInfo });
    try {
        const response = await axios.post(config.CHECK_USER_LOG_IN_STATUS, dataToSend);
        dispatch({
            type: types.CHECK_USER_LOG_IN_STATUS,
            payload: response.success
        })
    } catch (error) {
        console.log('Error Message:', error.message);
    }
}

export const getSymptom = (userInput) => async dispatch => {
    try {

        const response = await axios.post(`${config.INFERMEDICA_URL}`, { prediction: { userInput } });
        console.log("response in asctions", response);
        dispatch({
            type: types.GET_SYMPTOM,
            payload: response,
        })
    } catch (error) {
        console.log('Error Message:', error)
    }
}

export const getConditionsID = (id) => {
    console.log(id);
    return {
        type: types.GET_CONDITIONS_ID,
        payload: id
    }
}

export const signOut = () => async dispatch => {
    localStorage.removeItem('email');
    localStorage.removeItem('firstName');
    localStorage.removeItem('loggedin');
    localStorage.removeItem('username');
    try {
        await axios.get(config.LOG_OUT_URL);
        dispatch({
            type: types.SIGN_OUT
        })
    } catch (error) {
        console.log('Error Message:', error)
    }
}