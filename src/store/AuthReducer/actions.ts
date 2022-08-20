import { Action, ActionCreator } from 'redux';
import { AuthActionTypes } from './constants';
import { AuthActions } from './types';

const FetchAuth: ActionCreator<Action> = (isLoading: AuthActions) => ({
  type: AuthActionTypes.TOOGLE_IS_FETCHING,
  payload: { isLoading },
});

const LoginAction: ActionCreator<Action> = (
  email: AuthActions,
  pwd: AuthActions,
) => ({
  type: AuthActionTypes.LOGIN,
  payload: { email, pwd },
});

const LogoutAction: ActionCreator<Action> = () => ({
  type: AuthActionTypes.LOGOUT,
});

const FetchAuthError: ActionCreator<Action> = (action: {
  payload: string;
}): AuthActions => ({
  type: AuthActionTypes.FETCH_AUTH_FAILED,
  payload: action.payload,
});

export { LoginAction, LogoutAction, FetchAuth, FetchAuthError };
