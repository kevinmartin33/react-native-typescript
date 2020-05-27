import {
  ConnectUserAction,
  LogUserAction,
  CONNECTUSER,
  LOGIN
} from "../types/auth";
import { FETCH_LOGIN } from "../../../../static/misc/network";

export function connectUser(): ConnectUserAction {
  return ({
      type: CONNECTUSER,
      payload: {}
  })
}

// http call with axios middleware
export function logUser(user : any): LogUserAction {
  return ({
      type: LOGIN,
      payload: {
          request: {
              url: FETCH_LOGIN,
              method: 'post',
              data: user
          }
      }
  })
}