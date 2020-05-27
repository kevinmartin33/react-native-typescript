import {
  combineReducers
} from 'redux'
import auth from '../modules/Authentification/reducers/auth'

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  auth
});

export default rootReducer