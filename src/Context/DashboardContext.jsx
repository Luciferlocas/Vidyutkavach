import React, { createContext ,useState,useEffect} from 'react'
import toast from 'react-hot-toast';
const DashboardContext = createContext();
import { url } from '../Assets/Utils';

export const DashboardProvider = ({ children }) => {
    const [dashboardData, setDashboardData] = useState("");
    const [theme, setTheme] = useState(true);

    const dashboard = async () => {
          try {
            const response = await axios.get(`${url}/dashboard/get_dashboard`);
            setDashboardData(response.data);
            console.log(dashboardData);
            console.log("hii");
          } catch (error) {
            toast.error(error.message);
          }
         }
     useEffect(() => {
      dashboard()
    }, []);
return (
    <DashboardContext.Provider
      value={{ dashboard,dashboardData }}
    >
      {children}
    </DashboardContext.Provider>
  );

}

export default DashboardContext