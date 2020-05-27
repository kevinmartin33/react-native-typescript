export const CONNECTUSER = 'CONNECTUSER';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export interface ConnectUserAction {
  type: typeof CONNECTUSER;
  payload: Object;
}

export interface LogUserAction {
  type: typeof LOGIN | typeof LOGIN_FAIL | typeof LOGIN_SUCCESS;
  payload: Object;
}

export interface AuthState {
  isConnected: boolean;
}

export type AuthActionTypes = ConnectUserAction | LogUserAction;
