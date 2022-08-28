import React, { useEffect } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { IContact } from '../../store/ContactsReducer/types';
import { Search } from '../../ui/Search/Search';
import { Contact } from './Contact';

export const ContactsList: React.FC<IProps> = (props) => {
  const [SearchContacts, search, handlerSearch] = useSearch(props.contacts);

  useEffect(() => {
    props.AllContactsThunk();
  }, []);

  return (
    <div className='flex flex-col'>
      <Search search={search} handlerSearch={handlerSearch} />
      <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700'>
        {SearchContacts.map((contact: IContact) => (
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
  AllContactsThunk: () => void;
}
