import { Dispatch } from 'redux';
import { contactsAPI } from '../../services/profilesServices';
import { FetchData, FetchError, FetchSuccess } from './actions';

export function AllContactsThunk() {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(FetchData(true));
    try {
      const response = await contactsAPI.getUsers();
      dispatch(FetchSuccess(response));
    } catch (err) {
      dispatch(FetchError(err));
    }
    dispatch(FetchData(false));
  };
}
