import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface IAuthState {
  token: string;
  user: object;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: object;
  signIn(credentials: ISignInCredentials): Promise<void>
  signOut(): void;
}

// Cria o contexto com os as tipagens
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@ProductsManagement:token');
    const user = localStorage.getItem('@ProductsManagement:user');
  
    if(token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback( async ({email, password}) => {
    const response = await api.post('sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    localStorage.setItem('@ProductsManagement:token', token);
    localStorage.setItem('@ProductsManagement:user', user);

    setData({token, user});

  }, []);

  const signOut = useCallback( async () => {
    localStorage.removeItem('@ProductsManagement:token');
    localStorage.removeItem('@ProductsManagement:user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}