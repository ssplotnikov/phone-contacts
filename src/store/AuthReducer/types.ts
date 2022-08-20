export type AuthAction = {
  type: string;
  payload: PayloadType;
};

type PayloadType = {
  profile?: ProfileType;
  isAuth?: boolean;
  isLoading: boolean;
  error: string | null;
};

export type initialAuthType = {
  profile: ProfileType | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
};

type ProfileType = {
  _id: number;
  _role: string;
  name: string;
  surname: string;
  age?: number;
  avatarUrl?: string;
  email: string;
  role: string;
};
