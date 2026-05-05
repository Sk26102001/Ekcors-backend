'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from '@/api/userApis';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // start true

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await getCurrentUser();
      // Adjust based on your actual API response structure
      setUser(response?.data?.user || response?.user || null);
    } catch (error) {
      console.error('Auth fetch error:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, userLoading: loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}