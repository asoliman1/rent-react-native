import { combineReducers } from 'redux';

import authReducer from './auth';
import placesReducer from './places';
import vouchersReducer from './vouchers';
import reservationsReducer from './reservations';
import userReducer from './user';

const rootReducer = combineReducers({
  authReducer,
  vouchersReducer,
  reservationsReducer,
  placesReducer,
  userReducer
})

export default rootReducer;