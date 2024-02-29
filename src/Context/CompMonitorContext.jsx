import React, { useState } from 'react';

export const ComponentProvider = ({children}) => {
const[generated,setGenerated] = useState("")

const Generated = async() => {
     //   try {
        //     const response = await axios.get(`${url}/`, {
        //       headers: { Authorization: `Bearer ${token}` },
        //     });
        //     setGenerated(response.data);
        //   } catch (error) {
        //     toast.error(error.message);
        //   }
    }
    //  useEffect(() => {
    //   if (token) Generated();
    // }, [token]);

    return (
        <ComponentContext.Provider value={{

        }}>
            {children}
        </ComponentContext.Provider>
    )
}
export default CompMonitorContext