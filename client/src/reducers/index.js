import { combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import listReducer from './list_reducer';
import categoryReducer from './category_list_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    list: listReducer,
    category: categoryReducer,
});

export default rootReducer;