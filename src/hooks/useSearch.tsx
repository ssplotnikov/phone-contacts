import { ChangeEvent } from 'react';
import { IContact } from '../store/ContactsReducer/types';
import useInput from './useInput';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

export const useSearch = (datas: IContact[]) => {
  const [search, handlerSearch] = useInput('');
  if (search) {
    const SearchContacts = datas.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
    return [SearchContacts, search, handlerSearch] as [
      IContact[],
      string,
      onChangeType,
    ];
  }
  return [datas, search, handlerSearch] as [IContact[], string, onChangeType];
};
