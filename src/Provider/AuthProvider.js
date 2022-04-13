import { createContext, useContext, useEffect, useState } from "react";

const AuthProviderContext = createContext();
const AuthProviderContextDispatcher = createContext();
const AUTH_STATE_LOCAL_STORAGE = "authState";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(AUTH_STATE_LOCAL_STORAGE)) || false;
    setAuth(userData);
  }, []);

  useEffect(() => {
    const userData = JSON.stringify(auth);
    localStorage.setItem(AUTH_STATE_LOCAL_STORAGE, userData);
  }, [auth]);

  return (
    <AuthProviderContext.Provider value={auth}>
      <AuthProviderContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
