import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import listReducer from './list_reducer';
import categoryReducer from './category_list_reducer';
import conditionsReducer from './conditions_reducer';
import symptomCheckReducer from './symptom_check_reducer';
import searchReducer from './search_term_reducer';
import userSearchReducer from './check_user_search_reducer';


const rootReducer = combineReducers({
    category: categoryReducer,
    conditions: conditionsReducer,
    form: formReducer,
    list: listReducer,
    search: searchReducer,
    symptom: symptomCheckReducer,
    user: userReducer,
    userSearch: userSearchReducer,
});

export default rootReducer;