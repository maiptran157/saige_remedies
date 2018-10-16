import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import listReducer from './list_reducer';
import categoryReducer from './category_list_reducer';
import conditionsReducer from './conditions_reducer';
import symptomCheckReducer from './symptom_check_reducer';


const rootReducer = combineReducers({
    category: categoryReducer,
    conditions: conditionsReducer,
    form: formReducer,
    user: userReducer,
    list: listReducer,
    symptom: symptomCheckReducer
});

export default rootReducer;