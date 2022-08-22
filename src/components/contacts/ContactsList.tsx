import { useEffect } from 'react';
import { connect } from 'react-redux';

import { AllContactsThunk } from '../../store/ContactsReducer/thunks';
import { IContact } from '../../store/ContactsReducer/types';
import { Contact } from './Contact';

type PropsType = {
  contacts: IContact[];
  AllContactsThunk: typeof AllContactsThunk;
};

const ContactsList: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.AllContactsThunk();
  }, []);

  return (
    <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
      {props.contacts.map((contact: IContact) => (
        <Contact contact={contact} key={contact._id} />
      ))}
    </ul>
  );
};

const mapStateToProps = function (state: any) {
  return {
    contacts: state.contacts.profiles,
  };
};

const mapDispatchToProps = {
  AllContactsThunk,
};

export default connect<any>(mapStateToProps, mapDispatchToProps)(ContactsList);
