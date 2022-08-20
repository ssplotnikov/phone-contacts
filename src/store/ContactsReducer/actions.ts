import {
  DELETE_DATA,
  EDIT_DATA,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from './constants';
import { ActionMainType } from './types';

const FetchData = () => ({
  type: FETCH_DATA,
});

const FetchSuccess = (action: ActionMainType) => ({
  type: FETCH_DATA_SUCCESS,
  payload: action.payload?.profiles,
});
const FetchError = (action: ActionMainType) => ({
  type: FETCH_DATA_ERROR,
  payload: action.payload?.error,
});

const EditProfile = (action: ActionMainType) => ({
  type: EDIT_DATA,
  payload: action.payload?.profiles,
});

const DeleteProfile = (action: ActionMainType) => ({
  type: DELETE_DATA,
  payload: action.payload?.profiles?._id,
});

export { FetchData, FetchSuccess, FetchError, EditProfile, DeleteProfile };
