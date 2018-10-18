import types from './types';
import axios from 'axios';
import dummyReviewList from '../dummy_data/data_for_remedy_review';
import config from '../config';
import { formatPostData } from '../helpers';


const CATEGORY_URL = 'http://localhost:8888/c718_findhomeremedies/client/public/api/app.php?request=symptom_category';
const CONDITIONS_URL = 'http://localhost:8888/c718_findhomeremedies/client/public/api/app.php?request=search_symptom';

export function addReview(review) {
    const response = review;
    dummyReviewList.reviews.push(response);
    return {
        type: types.ADD_REVIEW,
        payload: response
    }
}

export function getReviewList(id) {
    const response = dummyReviewList;
    let reviewList = [];
    if (id === response._id) {
        reviewList = response.reviews
    }

    return {
        type: types.GET_REVIEW_LIST,
        payload: reviewList
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
        console.log("error message here:",err.message);
    }
}

export const getConditionsList = (id) => async dispatch => {
    const dataToSend = formatPostData( {ID: id} );

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
    const dataToSend = formatPostData( {search_term: term} );

    try {
        const response = await axios.post(`${config.SEARCH_SYMPTOM_URL}`, dataToSend);
        console.log(response);
        dispatch({
            type: types.GET_SEARCH_SYMPTOM,
            payload: response,
        })
    } catch(error) {
        console.log('Error Message:', error.message)
    }
}

export const userSignInInfo = (userInfo) => async dispatch => {
    const dataToSend = formatPostData( userInfo );

    try {
        const response = await axios.post(`${config.GET_USER_SIGN_IN_INFO}`, dataToSend);
        console.log("response",response);
        dispatch({
            type: types.GET_USER_SIGN_IN_INFO,
            payload: response,
        })
    
    } catch(error) {
        console.log('Error Message:', error.message)
    }
}

export const userSignUpInfo = (userInfo) => async dispatch => {
    const dataToSend = formatPostData( {search_term: userInfo} );

    try {
        const response = await axios.post(`${config.GET_USER_SIGN_UP_INFO}`, dataToSend);
        console.log("response", response);
        dispatch({
            type: types.GET_USER_SIGN_UP_INFO,
            payload: response,
        })
    } catch(error) {
        console.log('Error Message:', error.message)
    }
}


// export const getSymptom = (userInput) => {
//     console.log("userInput for getSymptom:", userInput);
//     const dataToSend = formatPostData(userInput);
//     return async (dispatch) => {
//         try {
//             const response = await axios.post(config.INFERMEDICA_URL, dataToSend)
//             // const response = await axios({
//             //     url: INFERMEDICA_URL,
//             //     method: 'post',
//             //     headers: {
//             //         'App-Id': APP_ID,
//             //         'App-Key': APP_KEY,
//             //         'Content-Type': CONTENT_TYPE
//             //     },
//             //     data: {
//             //         'text': userInput
//             //     }
//             // })
//             console.log("getSymptom resp:", response);
//             dispatch({
//                 type: types.GET_SYMPTOM,
//                 payload: response
//             })
//         } catch (error) {
//             console.log("getSymptom err:", error);
//             dispatch({
//                 type: types.GET_SYMPTOM_ERROR,
//                 error: 'Error getting symptom'
//             })
//         }
//     }
// }

// export async function getCategorylist() {
//    const response = await axios.get(`${CATEGORY_URL}`);
//    console.log('Response in actions index', response);

// export const signUp = (userInfo) => {
//     return async (dispatch) => {

//     }


