import { combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});
export default rootReducer;
