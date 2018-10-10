import types from './types';
import axios from 'axios';
<<<<<<< HEAD
import dummyReviewList from '../../dummy_data/data_for_remedy_review';
=======
import dummyReviewList from '../dummy_data/data_for_remedy_review';
>>>>>>> d53c8be737df414f6ee93b199e0227ed5ad2b1c7

export function addReview(review) {
    const response = review;
    return {
        type: types.ADD_REVIEW,
        payload: response
    }
}

// export function getSomeData(){
//     return function async (dispatch){
//         const resp = await axios.get('/get/data/from/server');

//         dispatch({
//             type: types.SOMETHING,
//             data: resp.data
//         });
//     }
// }

export function getReviewList(id) {
    const response = dummyReviewList;
    const reviewList = [];
    if (id === response._id) {
        reviewList[0] = response.reviews[0]
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

export const signUp = (userInfo) => {
    console.log(userInfo)
}
