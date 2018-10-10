import types from './types';
import axios from 'axios';
import dummyReviewList from '../dummy_data/data_for_remedy_review';

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
    let reviewList = [];
    if (id === response._id) {
        reviewList = response.reviews
    }

    console.log('ACTION CREATOR REVIEW LIST:', reviewList);

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

