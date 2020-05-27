export const REGISTERUSER = 'REGISTERUSER';

export interface RegisterUserAction {
  type: typeof REGISTERUSER;
  payload: Object;
}

export interface RegisterState {}

export type RegisterActionTypes = RegisterUserAction;
