import {
  AuthState,
  AuthActionTypes,
  CONNECTUSER,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../types/auth';

const initialState: AuthState = {
  isConnected: false,
};

export default function reducer(
  state = initialState,
  action: AuthActionTypes,
): AuthState {
  switch (action.type) {
    case CONNECTUSER:
      return {
        ...state,
        isConnected: true,
      };

    // Axios call reducers
    case LOGIN:
      return {
        ...state,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
