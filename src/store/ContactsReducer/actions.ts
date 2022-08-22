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

const EditProfile: ActionCreator<Action> = (action: ContactsActions) => ({
  type: ContactsActionTypes.EDIT_DATA,
  payload: action.payload,
});

const DeleteProfile: ActionCreator<Action> = (action: ContactsActions) => ({
  type: ContactsActionTypes.DELETE_DATA,
  payload: action.payload,
});

export { FetchData, FetchSuccess, FetchError, EditProfile, DeleteProfile };
