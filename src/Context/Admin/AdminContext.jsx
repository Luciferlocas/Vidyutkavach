import React, { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "../Authentication/AuthContext";
import { url } from "../../Assets/Utils";
import toast from "react-hot-toast";
import axios from "axios";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [roles, setRoles] = useState([]);

  const getRole = async () => {
    try {
      const res = await axios.get(`${url}/admin/get_roles`, {
        headers: { Authorization: `${token}` },
      });
      if (res.data.success) {
        setRoles(res.data.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getRole();
  }, []);

  const create = async (e) => {
    e.preventDefault();
    const data = {
      empID: user.empID,
      username: user.username,
      email: user.email,
      role: user.role,
      password: user.password,
    };

    try {
      const res = await axios
        .post(`${url}/admin/signup`, data, {
          headers: { Authorization: `${token}` },
        })
        .then((res) => {
          toast.success("User added successfully");
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUser([]);
    }
  };

  return (
    <AdminContext.Provider value={{ user, setUser, roles, create }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
