import React from 'react';
import { IContact } from '../../store/ContactsReducer/types';
import { Search } from '../../ui/Search/Search';
import { Contact } from './Contact';

export const ContactsList: React.FC<IProps> = (props) => {
  return (
    <div className='flex flex-col'>
      <Search />
      <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
        {props.contacts.map((contact: IContact) => (
          <Contact
            contact={contact}
            key={contact.id}
            UpdateContact={props.UpdateContact}
            DeleteContact={props.DeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

interface IProps {
  contacts: IContact[];
  UpdateContact: () => void;
  DeleteContact: () => void;
}
