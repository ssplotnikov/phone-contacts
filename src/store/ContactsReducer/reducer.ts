import {
  DELETE_DATA,
  EDIT_DATA,
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from './constants';
import { ActionMainType, initialMainType } from './types';

const initial: initialMainType = {
  profiles: [],
  isLoading: false,
  error: null,
};

const contactsReducer = (
  state: initialMainType = initial,
  action: ActionMainType,
) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, isLoading: action.payload };
    case FETCH_DATA_SUCCESS:
      return { ...state, profiles: [action.payload?.profiles] };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload?.error };
    case EDIT_DATA:
      return {
        ...state,
        profiles: state.profiles?.map((user) => {
          if (user._id === action.payload?.profiles?._id) {
            return { ...user, ...action.payload.profiles };
          }
        }),
      };
    case DELETE_DATA:
      return {
        ...state,
        profiles: state.profiles?.filter(
          (user) => user._id !== action.payload?.profiles?._id,
        ),
      };
    default:
      return state;
  }
};

export default contactsReducer;
