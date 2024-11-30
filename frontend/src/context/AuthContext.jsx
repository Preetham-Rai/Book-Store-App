import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const value = {
    currentUser,
    registerUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
