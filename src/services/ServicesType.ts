type Auth = {
  email: string;
  password: string;
};

type Contacts = {
  id: number;
  name?: string;
  email?: string;
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
