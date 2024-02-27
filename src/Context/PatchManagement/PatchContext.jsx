import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../Authentication/AuthContext";
const PatchContext = createContext({

});

export const PatchProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [patchData, setPatchData] = useState("");
  const[updateData,setUpdateData] = useState("");
  const[pendingData,setPendingData] = useState("");
  const [alertData,setAlertData] = useState("");
  const [patch, setPatch] = useState({
    company: "",
    model: "",
    version: "",
  });

  const showPatch = async () => {
    //   try {
    //     const response = await axios.get(`${url}/`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setPatchData(response.data);
    //   } catch (error) {
    //     toast.error(error.message);
    //   }
     }
    //  useEffect(() => {
    //   if (token) showPatch();
    // }, [token]);

    const updatePatch = async () => {
      //   try {
      //     const response = await axios.get(`${url}/`, {
      //       headers: { Authorization: `Bearer ${token}` },
      //     });
      //     setUpdateData(response.data);
      //   } catch (error) {
      //     toast.error(error.message);
      //   }
       }
      //  useEffect(() => {
      //   if (token) updatePatch();
      // }, [token]);

      const alertPatch = async () => {
        //   try {
        //     const response = await axios.get(`${url}/`, {
        //       headers: { Authorization: `Bearer ${token}` },
        //     });
        //     setAlertData(response.data);
        //   } catch (error) {
        //     toast.error(error.message);
        //   }
         }
        //  useEffect(() => {
        //   if (token) alertPatch();
        // }, [token]);

        const pending = async () => {
          //   try {
          //     const response = await axios.get(`${url}/`, {
          //       headers: { Authorization: `Bearer ${token}` },
          //     });
          //     setPendingData(response.data);
          //   } catch (error) {
          //     toast.error(error.message);
          //   }
           }
          //  useEffect(() => {
          //   if (token) pending();
          // }, [token]);
  

   const savePatch = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     company: patch.company,
  //     model: patch.model,
  //     version: patch.version,
  //   };
  //   try {
  //     await axios.post(`${url}/`, data, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     toast.success("Patch added successfully");

  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  showPatch()
  updatePatch()
  setPatch({
    company: "",
    model: "",
    version: "",
  });
   }

  return (

    <PatchContext.Provider value={{ patch, savePatch, setPatch ,patchData,updateData,pendingData,alertData}}>
      {children}
    </PatchContext.Provider>

  );
};
export default PatchContext;