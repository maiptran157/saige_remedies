import types from './types';
import axios from 'axios';
import dummyReviewList from '../dummy_data/data_for_remedy_review';

const CATEGORY_URL = 'http://localhost:8888/c718_findhomeremedies/client/public/api/app.php?request=symptom_category';

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

    // console.log('ACTION CREATOR REVIEW LIST:', reviewList);

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
        const response = await axios.get(`${CATEGORY_URL}`);

        dispatch({
            type: types.GET_CATEGORY_LIST,
            payload: response.data,
        })

    } catch(err) {
        console.log(err.message);
    }
}

export const getConditionsList = (id) => async dispatch => {
    try {
        const response = await axios.post({
            url: CATEGORY_URL,
            id: id
        });

        dispatch({
            type: types.GET_CONDITIONS_LIST,
            payload: response.data,
        })

    } catch(error) {
        console.log(err.message);
    }
}

// export const signUp = (userInfo) => {
//     return async (dispatch) => {

//     }


