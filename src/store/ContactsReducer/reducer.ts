import { ContactsActionTypes } from './constants';
import { ContactsActions, initialMainType } from './types';

const initial: initialMainType = {
  profiles: [],
  isLoading: false,
  error: null,
};

const contactsReducer = (
  state: initialMainType = initial,
  action: ContactsActions,
): initialMainType => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_DATA:
      return { ...state, ...action.payload };
    case ContactsActionTypes.FETCH_DATA_SUCCESS:
      return { ...state, profiles: [...action.payload] };
    case ContactsActionTypes.FETCH_DATA_ERROR:
      return { ...state, error: action.payload.error };
    case ContactsActionTypes.EDIT_DATA:
      return {
        ...state,
        ...state.profiles?.map((user) => {
          if (user._id === action.payload?._id) {
            return { ...user, ...action.payload };
          }
        }),
      };
    case ContactsActionTypes.DELETE_DATA:
      return {
        ...state,
        ...state.profiles?.filter((user) => user._id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactsReducer;
