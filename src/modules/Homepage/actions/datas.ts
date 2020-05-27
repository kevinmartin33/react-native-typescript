import {DatasAction, GETDATAS} from '../types/datas';

export function getDatas(datas: any): DatasAction {
  return {
    type: GETDATAS,
    datas,
  };
}
