import { createContext, useState, useContext, useEffect } from 'react';
import User from '../data/User'
const AuthContext = createContext();
import { useRouter } from 'next/router';

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const router = useRouter();

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser({}); 
  };

  useEffect(() => {

    if (!isLoggedIn) {

      router.push('/');
    }
  }, [isLoggedIn]);

  

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
