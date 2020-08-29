import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
 
const middleware = [
    thunk,
];

export default createStore(appReducer, composeWithDevTools(
applyMiddleware(...middleware)
));
