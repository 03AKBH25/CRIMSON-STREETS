import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/api/auth";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ token });
    }

    setLoading(false);
  }, []);

  // 🔹 LOGIN
  const loginUser = async (email, password) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    localStorage.setItem("token", data.token);
    setUser({ token: data.token });
  };

  // 🔹 REGISTER
  const registerUser = async (name, email, password) => {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    localStorage.setItem("token", data.token);
    setUser({ token: data.token });
  };

  // 🔹 GOOGLE LOGIN
  const googleAuth = async (googleToken) => {
    const res = await fetch(`${API_URL}/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: googleToken })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    localStorage.setItem("token", data.token);
    setUser({ token: data.token });
  };

  // 🔹 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        registerUser,
        googleAuth,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
