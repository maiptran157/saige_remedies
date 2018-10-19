import types from './types';
import axios from 'axios';
import config from '../config';
import { formatPostData } from '../helpers';
import { userInfo } from 'os';

export const addReview = (reviewInfo) => async dispatch => {
    const dataToSend = formatPostData({
        review: reviewInfo.review,
        rating: reviewInfo.rating,
        remedy_id: reviewInfo.id
    })
    try {
        const response = await axios.post(config.ADD_REVIEW_URL, dataToSend);
        console.log("response:", response)
        dispatch({
            type: types.ADD_REVIEW,
            payload: response
        })
    } catch (error) {
        console.log("error message:", error.message)
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
        console.log("error message:", error.message)
    }
}

export function getSingleReview(id) {
    const response = dummyReviewList;
    for (let index = 0; index < response.reviews[0].length; index++) {
        if (id === response.reviews[0][index]._id) {
            return {
                type: types.ADD_REVIEW,
                payload: response.reviews[0][index]
            }
        }
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
        console.log("error message:", err.message);
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
        console.log(error.message);
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
    const dataToSend = formatPostData(userInfo);

    try {
        const response = await axios.post(`${config.GET_USER_SIGN_IN_INFO}`, dataToSend);
        console.log("response in asctions", response);
        localStorage.setItem('loggedin', response.data.loggedin);
        localStorage.setItem('username', response.data.userData.username);
        dispatch({
            type: types.GET_USER_SIGN_IN_INFO,
            payload: response,
        })

    } catch (error) {
        console.log('Error Message:', error.message)
    }
}

export const userSignUpInfo = (userInfo) => async dispatch => {
    const dataToSend = formatPostData({ search_term: userInfo });

    try {
        const response = await axios.post(`${config.GET_USER_SIGN_UP_INFO}`, dataToSend);
        localStorage.setItem('token', response.data.token);
        dispatch({
            type: types.GET_USER_SIGN_UP_INFO,
            payload: response.data,
        })
    } catch (error) {

        console.log('Error Message:', error.message)
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
        console.log(error.message)
    }
}

