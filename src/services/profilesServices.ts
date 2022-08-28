import axios from 'axios';
import { IContact } from '../store/ContactsReducer/types';
import { CreateUserResponse, GetContactsResponse } from './ServicesType';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export const contactsAPI = {
  async getUsers(page: number = 1, limit: number = 10) {
    try {
      const { data } = await instance.get<GetContactsResponse>(
        `contacts?_page=${page}&_limit=${limit}`,
      );
      return data;
    } catch (error) {
      return error;
    }
  },
  async updateContact(contact: IContact) {
    try {
      const { data } = await instance.put<GetContactsResponse>(
        `contacts/${contact.id}`,
        JSON.stringify({
          id: contact.id,
          age: contact.age,
          name: contact.name,
          email: contact.email,
        }),
      );
      return data;
    } catch (error) {
      return error;
    }
  },
  async deleteContact(id: string | number) {
    console.log(id);
    try {
      await instance.delete(`contacts/${id}`);
    } catch (error) {
      console.log('error', error);

      return error;
    }
  },
};

export const authAPI = {
  async Registration(email: string, pwd: string) {
    try {
      const { data } = await instance.post<CreateUserResponse>('register', {
        email: email,
        pwd: pwd,
      });

      return data;
    } catch (error) {
      return error;
    }
  },
};
