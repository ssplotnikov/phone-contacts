// auth thunk

import { Dispatch } from 'redux';
import { authAPI } from '../../services/profilesServices';
import { FetchAuth, FetchAuthError, LoginAction } from './actions';
import { AuthThunkAction } from './types';

export function RegistrationThunk(email: string, pwd: string): AuthThunkAction {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(FetchAuth(true));
    try {
      await authAPI.Registration(email, pwd);
      dispatch(LoginAction(email, pwd));
      // return response;
    } catch (e) {
      dispatch(FetchAuthError(e));
    }
    dispatch(FetchAuth(false));
  };
}
// export function LoginThunk(email: string, pwd: string) {
//   return async (dispatch: ThunkDispatch<any, void, Action>) => {
//     dispatch(FetchAuth(true));
//     try {
//       const response = await authAPI.Registration(email, pwd);
//       dispatch(LoginAction({ email, pwd }));
//       return response;
//     } catch (e) {
//       dispatch(FetchAuthError(e));
//     }
//     dispatch(FetchAuth(false));
//   };
// }
