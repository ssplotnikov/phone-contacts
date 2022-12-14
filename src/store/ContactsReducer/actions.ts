import { Action, ActionCreator } from 'redux';
import { ContactsActionTypes } from './constants';
import { ContactsActions } from './types';

const FetchData: ActionCreator<Action> = (isLoading) => ({
  type: ContactsActionTypes.FETCH_DATA,
  payload: { isLoading },
});

const FetchSuccess: ActionCreator<Action> = (payload: ContactsActions) => ({
  type: ContactsActionTypes.FETCH_DATA_SUCCESS,
  payload,
});
const FetchError: ActionCreator<Action> = (action: ContactsActions) => ({
  type: ContactsActionTypes.FETCH_DATA_ERROR,
  payload: action.payload,
});

const EditProfile: ActionCreator<Action> = (contact: ContactsActions) => ({
  type: ContactsActionTypes.EDIT_DATA,
  payload: contact,
});

const DeleteProfile: ActionCreator<Action> = (id: ContactsActions) => ({
  type: ContactsActionTypes.DELETE_DATA,
  payload: id,
});

export { FetchData, FetchSuccess, FetchError, EditProfile, DeleteProfile };
