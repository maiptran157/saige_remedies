import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import think from './middleware/think';
import types from './actions/types';

const store = createStore(rootReducer, {}, applyMiddleware(think));

if (localStorage.getItem('loggedin')) {
    store.dispatch({ type: types.GET_USER_SIGN_IN_INFO });
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
