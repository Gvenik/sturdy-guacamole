import { combineReducers } from 'redux';
import sidebarLayoutReducer from '../containers/SidebarLayout/reducer';

const rootReducer = combineReducers({
    sidebarLayoutReducer,
});

export default rootReducer;
