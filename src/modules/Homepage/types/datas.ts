export const GETDATAS = 'GETDATA';

export interface DatasAction {
  type: typeof GETDATAS;
  datas: Array<any>;
}

export interface DatasState {
  datas: Array<Object> | null;
  isLoaded: boolean;
}

export type DatasActionTypes = DatasAction;
