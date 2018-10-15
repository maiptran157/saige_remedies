import { combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import listReducer from './list_reducer';
import categoryReducer from './category_list_reducer';
import symptomCheckReducer from './symptom_check_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    list: listReducer,
    category: categoryReducer,
    symptom: symptomCheckReducer
});

export default rootReducer;