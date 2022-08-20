type Auth = {
  email: string;
  password: string;
};

type Contacts = {
  _id: number;
  name?: string;
  surname?: string;
  age?: number;
  avatarUrl?: string;
};

type CreateUserResponse = {
  data: Auth;
};

type GetContactsResponse = {
  data: Contacts[];
};
type updateContactResponse = {
  data: Contacts;
};

export type {
  Auth,
  CreateUserResponse,
  GetContactsResponse,
  Contacts,
  updateContactResponse,
};
