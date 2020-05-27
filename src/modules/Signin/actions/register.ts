import {RegisterActionTypes, REGISTERUSER} from '../types/register';

export function registerUser(): RegisterActionTypes {
  return {
    type: REGISTERUSER,
    payload: {},
  };
}
