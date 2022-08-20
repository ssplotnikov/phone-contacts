export type ActionMainType = {
  type: string;
  payload?: PayloadType;
};

type PayloadType = {
  profiles: ProfileType | null;
  isLoading: boolean;
  error: string | null;
};

export type initialMainType = {
  profiles: ProfileType[] | null;
  isLoading: boolean;
  error: string | null;
};

type ProfileType = {
  _id: number;
  name: string;
  surname: string;
  age?: number;
  avatarUrl?: string;
};
