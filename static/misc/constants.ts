import {
    Dimensions,
    StatusBar,
    Platform
} from 'react-native'
import DeviceInfo from 'react-native-device-info'

export const DEV_MODE                           = true
export const APP_NAME                           = "Boilerplate"

export const DURATION_TIMEOUT_AXIOS             = 100000

export const CACHED_STATE_KEY                   = 'CACHED_STATE_KEY'

export const ROUTE_PENULTIMATE                  = 'PENULTIMATE'

export const WIN                                = Dimensions.get('window')

export const HEIGHT_STATUSBAR                   = Platform.OS === 'ios' ? DeviceInfo.hasNotch() ? 50 : 20 : StatusBar.currentHeight
export const HEIGHT_HEADER                      = 50 + (HEIGHT_STATUSBAR || 0)

export const PADDING_SIDES                      = Math.round(WIN.width / 100 * 4)

export const REGEX_EMAIL                        = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const REGEX_FULLNAME                     = /^([A-zÀ-ÿ]|-){2,}\s.{2,}$/
export const REGEX_PASSWORD                     = /^(?=.*\d)(?=.*[a-zA-Z]).{8,32}/
export const REGEX_OLD_PASSWORD                 = /^.{6,}$/
export const REGEX_CREDIT_CARD_NUMBER           = /^(?:(4[0-9]{15})|((?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|(6(?:011|5[0-9]{2})[0-9]{12})|(3(?:088|096|112|158|337|5(?:2[89]|[3-8][0-9]))\d{12}))$/
export const REGEX_PHONE                        = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
