import { AuthActionTypes } from './constants';
import { AuthActions, initialAuthType } from './types';

const initial: initialAuthType = {
  profile: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const authReducer = (
  state: initialAuthType = initial,
  action: AuthActions,
): initialAuthType => {
  switch (action.type) {
    case AuthActionTypes.TOOGLE_IS_FETCHING:
      return { ...state, ...action.payload };
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        profile: action.payload,
        isAuth: true,
      };
    case AuthActionTypes.LOGOUT:
      return { ...state, ...initial };
    case AuthActionTypes.FETCH_AUTH_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
