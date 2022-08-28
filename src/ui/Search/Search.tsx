import { ChangeEvent } from 'react';

export interface IPropsSearch {
  search: string;
  handlerSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<IPropsSearch> = ({ search, handlerSearch }) => {
  return (
    <div>
      <input
        id='search'
        name='search'
        type='search'
        autoComplete='search'
        required
        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        placeholder='Search contact'
        value={search}
        onChange={handlerSearch}
      />
    </div>
  );
};
