import { ContactsActionTypes } from './constants';
import { ContactsActions, initialMainType } from './types';

const initial: initialMainType = {
  contacts: [],
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
      return { ...state, contacts: [...action.payload] };
    case ContactsActionTypes.FETCH_DATA_ERROR:
      return { ...state, error: action.payload.error };
    case ContactsActionTypes.EDIT_DATA:
      return {
        ...state,
        contacts: state.contacts?.map((contact) =>
          contact.id === action.payload?.id
            ? { ...contact, ...action.payload }
            : contact,
        ),
      };
    case ContactsActionTypes.DELETE_DATA:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default contactsReducer;
