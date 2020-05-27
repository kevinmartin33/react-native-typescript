import {
  DEV_MODE
} from './constants'

export const LINK                     = DEV_MODE ? 'https://devlink' : 'https://api.prod'

export const FETCH_LOGIN              = '/auth/login'
