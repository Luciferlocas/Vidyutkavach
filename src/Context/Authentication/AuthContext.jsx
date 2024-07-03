import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { url } from "../../Assets/Utils";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  const [loading, setloading] = useState(false);
  const [res, setRes] = useState(false);
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    setUser({ email, password });
    setloading(true);
    try {
      if (password === "vim@123") {
        const response = await axios.post(`${url}/send_otp/`, {
          email,
        });

        if (response.data.message == "OTP sent to email if user exist") {
          setRes(true);
          toast.success("OTP sent");
        }
      } else {
        toast.error("Wrong password or email");
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

  const verify = async (otp) => {
    setloading(true);
    try {
      const response = await axios.post(`${url}/verify_otp/`, {
        email : user.email,
        otp: otp + "",
      });
      if (response.data.message) {
        Cookies.set("token", true, { secure: true });
        setToken(true);
        toast.success("Welcome");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.message)
          toast.success("Welcome Admin!");
        else toast.error(error.response.data);
      } else toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    setToken(null);
    setRes(false);
  };

  const toggle = () => {
    setTheme(!theme);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        res,
        login,
        logout,
        loading,
        theme,
        toggle,
        verify,
        user,
      }}
    >
      {children}
      <Toaster position="bottom-right" />
    </AuthContext.Provider>
  );
};

export default AuthContext;
