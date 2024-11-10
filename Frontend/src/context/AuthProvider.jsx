import React, { createContext, useContext, useState } from 'react';

// Create a context for auth
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
