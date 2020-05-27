import {
  Middleware,
  MiddlewareAPI,
  Dispatch,
  AnyAction
} from 'redux';

import _ from 'lodash'

import { CACHED_STATE_KEY } from '../../../static/misc/constants';

import {
  getAsyncStorageItem,
  setAsyncStorageItem
} from '../../../static/misc/utils';

export function getCachedState() {
  return getAsyncStorageItem(CACHED_STATE_KEY)
  .then((response: any) => JSON.parse(response) || {})
}

export function createAsyncStorageMiddleware(blacklistedKeys: (string | number | symbol)[] = []): Middleware {
  return (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    const result = next(action)
    const newState = store.getState()
    const cachedState = _.omit(newState, blacklistedKeys)
    setAsyncStorageItem(CACHED_STATE_KEY, JSON.stringify(cachedState))
    return result
  }
}