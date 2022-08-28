import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ContactsList } from '../../components/contacts/ContactsList';
import {
  AllContactsThunk,
  DeleteContact,
  UpdateContact,
} from '../../store/ContactsReducer/thunks';
import { IContact } from '../../store/ContactsReducer/types';

const Main: React.FC<PropsFromRedux> = (props) => {
  return <ContactsList {...props} />;
};

interface MapStateType {
  contacts: IProfiles;
}
interface IProfiles {
  contacts: IContact[];
}

const mapState = (state: MapStateType) => ({
  contacts: state.contacts.contacts,
});

const mapDispatch = {
  AllContactsThunk,
  UpdateContact,
  DeleteContact,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Main);
