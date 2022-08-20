import { createContext, useState } from 'react';

type TypeProps = {
  children?: React.ReactNode;
};

type TypeState = {
  auth?: TypeAuth;
};

type TypeAuth = {
  email: string;
  pwd: string;
};

const AuthContext = createContext<any>({});

export const AuthProvider: React.FC<TypeProps> = ({ children }) => {
  const [auth, setAuth] = useState<TypeState>({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
