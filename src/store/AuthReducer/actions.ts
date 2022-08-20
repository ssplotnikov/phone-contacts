import {
  FETCH_AUTH_FAILED,
  LOGIN,
  LOGOUT,
  TOOGLE_IS_FETCHING,
} from './constants';
import { AuthAction } from './types';

const FetchAuth = (action: AuthAction) => ({
  type: TOOGLE_IS_FETCHING,
  payload: action.payload.isLoading,
});

const LoginAction = (action: AuthAction) => ({
  type: LOGIN,
  payload: action.payload,
});

const LogoutAction = () => ({
  type: LOGOUT,
});
const FetchAuthError = (action: AuthAction) => ({
  type: FETCH_AUTH_FAILED,
  payload: action.payload,
});

export { LoginAction, LogoutAction, FetchAuth };
