import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Spinner,
} from "@nextui-org/react";
import DashboardContext from "../../Context/Dashboard/DashboardContext";
import Grid from "../../Components/Flow/Grid";

const GridMonitoring = () => {
  const { loading } = useContext(DashboardContext);

  return loading ? (
    <div className="min-h-screen lg:pl-[16.5rem] grid place-content-center">
      <Spinner />
    </div>
  ) : (
    <div className="lg:pl-[16.5rem] px-4 lg:pr-[1rem] h-screen my-[1em]">
      <Grid />
    </div>
  );
};

export default GridMonitoring;
