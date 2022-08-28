import { Dispatch } from 'redux';
import { contactsAPI } from '../../services/profilesServices';
import {
  DeleteProfile,
  EditProfile,
  FetchData,
  FetchError,
  FetchSuccess,
} from './actions';
import { IContact } from './types';

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

export function DeleteContact(id: string | number) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(FetchData(true));
    try {
      await contactsAPI.deleteContact(id);
      dispatch(DeleteProfile(id));
    } catch (err) {
      dispatch(FetchError(err));
    }
    dispatch(FetchData(false));
  };
}

export function UpdateContact(contact: IContact) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(FetchData(true));
    try {
      await contactsAPI.updateContact(contact);
      dispatch(EditProfile(contact));
    } catch (err) {
      dispatch(FetchError(false));
    }
    dispatch(FetchData(false));
  };
}
