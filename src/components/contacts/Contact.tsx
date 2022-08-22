import { useState } from 'react';
import photo from '../../assets/photo.jpg';
import useInput from '../../hooks/useInput';

export const Contact = ({ contact }: any) => {
  const [name, handlerName] = useInput(contact.name);
  const [email, handlerEmail] = useInput(contact.email);
  const [edit, setEdit] = useState(false);

  const _handlerDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };
  return (
    <li
      className='pb-3 sm:pb-4'
      onDoubleClick={() => setEdit(true)}
      onKeyDown={_handlerDown}
      // onBlur={() => setEdit(false)}
    >
      <div className='flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <img className='w-8 h-8 rounded-full' src={photo} alt='Neil image' />
        </div>
        <div className='flex-1 min-w-0'>
          {!edit ? (
            <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
              {name}
            </p>
          ) : (
            <div>
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder={name ? `${name}` : 'Contact name'}
                value={name}
                onChange={handlerName}
                autoFocus={true}
              />
            </div>
          )}
          {!edit ? (
            <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
              {email}
            </p>
          ) : (
            <div>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder={email ? `${email}` : 'Email address'}
                value={email}
                onChange={handlerEmail}
                autoFocus={false}
              />
            </div>
          )}
        </div>
        <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
          $320
        </div>
      </div>
    </li>
  );
};
