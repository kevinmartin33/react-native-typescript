import {DatasState, DatasActionTypes, GETDATAS} from '../types/datas';

const initialState: DatasState = {
  datas: null,
  isLoaded: false,
};

export default function reducer(
  state = initialState,
  action: DatasActionTypes,
): DatasState {
  switch (action.type) {
    case GETDATAS:
      return {
        ...state,
        datas: action.datas,
        isLoaded: true,
      };

    default:
      return state;
  }
}
