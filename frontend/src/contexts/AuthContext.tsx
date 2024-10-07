import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import {auth} from '../firebaseConfig';


interface AuthContextType {
    user: FirebaseUserWithToken | null;
    setUser: React.Dispatch<React.SetStateAction<FirebaseUserWithToken | null>>;
  }
  
  interface FirebaseUserWithToken extends FirebaseUser {
    token: string;
  }
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  const AuthContext = createContext<AuthContextType | null>(null);
  
  export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<FirebaseUserWithToken | null>(null);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          setUser({ ...user, token });
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);