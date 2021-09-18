import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const middlewareEnhancer = applyMiddleware(thunk);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
    rootReducer,
    {},
    composedEnhancers,
);

export type RootState = ReturnType<typeof store.getState>;
export default store;
