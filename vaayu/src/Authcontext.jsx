// AuthContext.js
import React, { useState, createContext, useContext, useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [stateRegion, setStateRegion] = useState(null);
  const [district, setDistrict] = useState(null);

  const location = (state, district) => {
    setStateRegion(state);
    setDistrict(district);
  };

  // Function to handle user login
  const login = (userData) => {
    // Store the user data in a cookie
    cookies.set("user", userData, { path: "/" });
    setUser(userData);
  };

  // Function to handle user logout
  const logout = () => {
    // Remove the user data cookie
    cookies.remove("user");
    setUser(null);
  };

  useEffect(() => {
    // Check for the user data cookie when the app loads
    const storedUser = cookies.get("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, location, stateRegion, district }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
