import { applyMiddleware, combineReducers, createStore } from 'redux';
import { chatReducer } from './reducers/chat-reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    chatReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
