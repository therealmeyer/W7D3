import { combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';

// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  entities: entitiesReducer
});
export default rootReducer;
