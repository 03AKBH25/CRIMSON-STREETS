import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // 🔥 Simulate backend call
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeResponse = {
          user: { email },
          token: "fake-jwt-token"
        };

        localStorage.setItem("user", JSON.stringify(fakeResponse));
        setUser(fakeResponse);
        resolve(fakeResponse);
      }, 1000);
    });
  };

  const register = async (email, password) => {
    return login(email, password); 
  };

  const googleLogin = async (googleToken) => {

    const fakeResponse = {
      user: { email: "googleuser@gmail.com" },
      token: googleToken
    };

    localStorage.setItem("user", JSON.stringify(fakeResponse));
    setUser(fakeResponse);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, googleLogin, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
