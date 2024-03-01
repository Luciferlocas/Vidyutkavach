import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { url } from "../../Assets/Utils";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  const [loading, setloading] = useState(false);
  const [response, setResponse] = useState(null);
  const [theme, setTheme] = useState(true);

  const login = async (empID, password) => {
    setloading(true);
    try {
      const response = await axios.post(`${url}/user/signin`, {
        empID,
        password,
      });
      if (response.data.success) {
        setResponse(true);
        toast.success("OTP sent");
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

  const verify = async (empID, otp) => {
    setloading(true);
    try {
      const response = await axios.post(`${url}/user/verify_otp`, {
        empID,
        otp,
      });
      if (response.data.success) {
        Cookies.set("token", response.data.token, { secure: true });
        setToken(response.data.token);
        toast.success("Welcome");
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
  
  const toggle = () => {
    setTheme(!theme);
  };

  return (
    <AuthContext.Provider
      value={{ token, response, login, logout, loading, theme, toggle, verify }}
    >
      {children}
      <Toaster position="bottom-right" />
    </AuthContext.Provider>
  );
};

export default AuthContext;
