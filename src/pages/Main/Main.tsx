import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ContactsList } from '../../components/contacts/ContactsList';
import { AllContactsThunk } from '../../store/ContactsReducer/thunks';
import { IContact } from '../../store/ContactsReducer/types';

const Main: React.FC<PropsFromRedux> = (props) => {
  useEffect(() => {
    props.AllContactsThunk();
  }, []);

  return <ContactsList {...props} />;
};

interface MapStateType {
  contacts: IProfiles;
}
interface IProfiles {
  profiles: IContact[];
}

const mapState = (state: MapStateType) => ({
  contacts: state.contacts.profiles,
});

const mapDispatch = {
  AllContactsThunk,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Main);
