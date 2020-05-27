import {combineReducers} from 'redux';
import auth from '../modules/Authentification/reducers/auth';
import register from '../modules/Signin/reducers/register';
import homepage from '../modules/Homepage/reducers/datas';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth,
  register,
  homepage,
});

export default rootReducer;
