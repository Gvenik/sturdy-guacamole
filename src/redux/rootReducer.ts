import { combineReducers } from 'redux';
import sidebarLayoutReducer from '../containers/SidebarLayout/reducer';
import contentReducer from '../containers/Content/reducer';

const rootReducer = combineReducers({
    sidebarLayoutReducer,
    contentReducer,
});

export default rootReducer;
