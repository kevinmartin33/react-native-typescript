import {createStore, applyMiddleware, CombinedState} from 'redux';

import _ from 'lodash';

import axiosMiddleware from 'redux-axios-middleware';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './rootreducer';
import http from '../services/axios';

import {
  createAsyncStorageMiddleware,
  getCachedState,
} from './middlewares/AsyncStorageMiddleware';

const blacklistedKeys: (string | number | symbol)[] = ['auth','homepage'];

export default async function(): Promise<CombinedState<any>> {
  const cachedState = _.omit(await getCachedState(), blacklistedKeys);

  const createStoreWithMiddleware = applyMiddleware(
    createAsyncStorageMiddleware(blacklistedKeys),
    axiosMiddleware(http),
    promiseMiddleware(),
    thunk,
  )(createStore);

  return createStoreWithMiddleware(reducers, cachedState);
}
