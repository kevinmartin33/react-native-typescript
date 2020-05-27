import {
  RegisterActionTypes,
  RegisterState,
  REGISTERUSER,
} from '../types/register';

const initialState: RegisterState = {};

export default function reducer(
  state = initialState,
  action: RegisterActionTypes,
): RegisterState {
  switch (action.type) {
    case REGISTERUSER:
      return {
        ...state,
      };

    default:
      return state;
  }
}
