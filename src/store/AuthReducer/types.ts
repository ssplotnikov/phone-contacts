import { ThunkAction } from 'redux-thunk';
import { AuthActionTypes } from './constants';
export interface IAction<T, R = any> {
  type: T;
  payload: R;
}

export type AuthLoginType = IAction<AuthActionTypes.LOGIN, IAuthProfile>;
export type AuthLogoutType = IAction<AuthActionTypes.LOGOUT, IAuthProfile>;
export type AuthToogleType = IAction<
  AuthActionTypes.TOOGLE_IS_FETCHING,
  IAuthToogle
>;
export type AuthFailedType = IAction<AuthActionTypes.FETCH_AUTH_FAILED, string>;

export type AuthActions =
  | AuthLoginType
  | AuthLogoutType
  | AuthFailedType
  | AuthToogleType;

export type AuthThunkAction = ThunkAction<
  void,
  initialAuthType,
  any,
  AuthActions
>;

// type PayloadType = {
//   profile?: ProfileType;
//   isAuth?: boolean;
//   isLoading?: boolean;
//   error?: string | null;
// };

export type initialAuthType = {
  profile: IAuthProfile | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
};

interface IAuthProfile {
  email: string;
  pwd: string;
}
interface IAuthToogle {
  isLoading: boolean;
}
