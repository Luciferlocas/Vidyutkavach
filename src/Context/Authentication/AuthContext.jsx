import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import {url} from "../../Assets/Utils"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [loading, setloading] = useState(false);
  const [response, setResponse] = useState(null);
  const [theme, setTheme] = useState(true);

  const toggle =()=>{
    setTheme(!theme);
  }

  // Cookies.set("token", true);

  const login = async (empID, password) => {
    setloading(true);
    try {
      const response = await axios.post(`${url}/user/signin`, {
        empID,
        password,
      });
      if (response.data.success) {
        toast.success("Welcome");
        // setResponse(response);
        // Cookies.set("token", response.data.AccessToken, { secure: true });
        // setToken(response.data.AccessToken);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else toast.error(error.response.data);
      } else toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    setToken(null);
    setResponse(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, response, login, logout, loading, theme, toggle }}
    >
      {children}
      <Toaster position="bottom-right" />
    </AuthContext.Provider>
  );
};

export default AuthContext;
