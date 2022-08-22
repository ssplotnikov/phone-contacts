import { createContext, useState } from 'react';

type TypeProps = {
  children?: React.ReactNode;
};

type TypeState = {
  auth?: TypeAuth;
  setAuth?: (auth: TypeAuth) => void;
};

type TypeAuth = {
  email: string;
  pwd: string;
  isAuth: boolean;
};

const AuthContext = createContext<any>({
  email: '',
  pwd: '',
  isAuth: true,
});

export const AuthProvider: React.FC<TypeProps> = ({ children }) => {
  const [auth, setAuth] = useState<TypeAuth>({
    email: '',
    pwd: '',
    isAuth: true,
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
