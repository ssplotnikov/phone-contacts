import axios from 'axios';
import {
  Contacts,
  CreateUserResponse,
  GetContactsResponse,
} from './ServicesType';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export const contactsAPI = {
  async getUsers(page: number = 1, limit: number = 10) {
    try {
      const { data } = await instance.get<GetContactsResponse>(
        `contacts?page=${page}&limit=${limit}`,
      );
      return data;
    } catch (error) {
      return error;
    }
  },
  async updateContact(contact: Contacts) {
    try {
      const { data } = await axios.put<GetContactsResponse>(
        `contacts/${contact._id}`,
        {
          name: contact.name,
          surname: contact.surname,
          age: contact.age,
          avatarUrt: contact.avatarUrl,
        },
      );
      return data;
    } catch (error) {
      return error;
    }
  },
  async deleteContact(_id: string) {
    try {
      const { data } = await axios.delete(`contacts/${_id}`);
      return data;
    } catch (error) {
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
