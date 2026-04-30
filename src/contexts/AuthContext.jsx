
import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

const AuthContext = createContext();
const MODEL_PROFILE_STORAGE_KEY = 'omeridiano:model-profile';

const MODEL_PROFILE = {
  name: 'Perfil Modelo',
  email: 'perfil.modelo@omeridiano.com',
  created: '2026-01-01T00:00:00.000Z',
  isModelProfile: true
};

export const useAuth = () => useContext(AuthContext);

const getStoredModelProfile = () => {
  try {
    const storedProfile = localStorage.getItem(MODEL_PROFILE_STORAGE_KEY);
    return storedProfile ? JSON.parse(storedProfile) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(pb.authStore.model || getStoredModelProfile());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state
    setCurrentUser(pb.authStore.model || getStoredModelProfile());
    setLoading(false);

    // Subscribe to auth state changes
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setCurrentUser(model || getStoredModelProfile());
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const authData = await pb.collection('users').authWithPassword(email, password, {
      $autoCancel: false
    });
    localStorage.removeItem(MODEL_PROFILE_STORAGE_KEY);
    return authData;
  };

  const signup = async (data) => {
    // Create user
    const record = await pb.collection('users').create(data, {
      $autoCancel: false
    });
    // Immediately log them in
    await login(data.email, data.password);
    return record;
  };

  const logout = () => {
    pb.authStore.clear();
    localStorage.removeItem(MODEL_PROFILE_STORAGE_KEY);
    setCurrentUser(null);
  };

  const loginWithModelProfile = () => {
    localStorage.setItem(MODEL_PROFILE_STORAGE_KEY, JSON.stringify(MODEL_PROFILE));
    setCurrentUser(MODEL_PROFILE);
    return MODEL_PROFILE;
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loginWithModelProfile,
    isAuthenticated: !!currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
