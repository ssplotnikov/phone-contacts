import { ContactsActionTypes } from './constants';

export interface IAction<T, R = any> {
  type: T;
  payload: R;
}

export type GetContactType = IAction<
  ContactsActionTypes.FETCH_DATA_SUCCESS,
  IContact[]
>;

export type ContactLoadingType = IAction<
  ContactsActionTypes.FETCH_DATA,
  ILoading
>;
export type ContactErrorType = IAction<
  ContactsActionTypes.FETCH_DATA_ERROR,
  IError
>;
export type ContactDeleteType = IAction<
  ContactsActionTypes.DELETE_DATA,
  string
>;
export type ContactEditType = IAction<ContactsActionTypes.EDIT_DATA, IContact>;

export type ContactsActions =
  | GetContactType
  | ContactEditType
  | ContactLoadingType
  | ContactErrorType
  | ContactDeleteType;
export interface IContact {
  id: string | number;
  name: string;
  age: number;
  email: string;
}
interface ILoading {
  isLoading: boolean;
}

interface IError {
  error: string | null;
}
export type ActionMainType = {
  type: string;
  payload?: PayloadType;
};

type PayloadType = {
  contacts: IContact | null;
  isLoading: boolean;
  error: string | null;
};

export type initialMainType = {
  contacts: IContact[];
  isLoading: boolean;
  error: string | null;
};
