import {
  FETCH_AUTH_FAILED,
  LOGIN,
  LOGOUT,
  TOOGLE_IS_FETCHING,
} from './constants';
import { AuthAction, initialAuthType } from './types';

const initial: initialAuthType = {
  profile: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const authReducer = (state: initialAuthType = initial, action: AuthAction) => {
  switch (action.type) {
    case TOOGLE_IS_FETCHING:
      return { ...state, isLoading: action.payload.isLoading };
    case LOGIN:
      return {
        ...state,
        profile: action.payload.profile,
        isAuth: true,
      };
    case LOGOUT:
      return { ...state, ...initial };
    case FETCH_AUTH_FAILED:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default authReducer;
