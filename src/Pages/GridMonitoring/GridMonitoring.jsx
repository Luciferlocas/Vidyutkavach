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
  const { status, loading, dashboardData } = useContext(DashboardContext);

  return loading ? (
    <div className="min-h-screen lg:pl-[16.5rem] grid place-content-center">
      <Spinner />
    </div>
  ) : (
    <div className="lg:pl-[16.5rem] px-4 lg:pr-[1rem] h-screen">
      <div className="my-[1em] grid grid-cols-12 gap-4">
        <Card className="md:col-span-2 col-span-6">
          <CardHeader className="flex gap-3">
            <p className="text-md">Grid Status</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="sm:text-[1.5em] text-[1.3em]">
              Connected to the main grid
            </p>
          </CardBody>
        </Card>
        <Card className="md:col-span-2 col-span-6">
          <CardHeader className="flex gap-3">
            <p className="text-md">Energy Efficiency</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="sm:text-[2em] text-[1.5em]">
              {dashboardData.energy_efficiency.value} %
            </p>
          </CardBody>
        </Card>
        <Card className="md:col-span-4 col-span-12">
          <CardHeader className="flex gap-3">
            <p className="text-md">Grid Status</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex justify-around">
              <div className="flex flex-col">
                <p className="sm:text-[1.5em] text-[1em]">
                  {status.find((item) => item._id === "output").totalValue} KW
                </p>
                <p className="text-small text-default-500">Production</p>
              </div>
              <div className="h-[4em] w-[0.5px] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="flex flex-col">
                <p className="sm:text-[1.5em] text-[1em]">
                  {status.find((item) => item._id === "input").totalValue} KW
                </p>
                <p className="text-small text-default-500">Consumption</p>
              </div>
              <div className="h-[4em] w-[0.5px] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="flex flex-col">
                <p className="sm:text-[1.5em] text-[1em]">
                  {status.find((item) => item._id === "output").totalValue -
                    status.find((item) => item._id === "input").totalValue}{" "}
                  KW
                </p>
                <p className="text-small text-default-500">Production</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="md:col-span-2 col-span-5">
          <CardHeader className="flex gap-3">
            <p className="text-md">Battery SoC</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="sm:text-[2em] text-[1em] text-center">
              {Math.ceil(
                status.find((item) => item._id === "storage").totalValue
              )}
              KW
            </p>
          </CardBody>
        </Card>
        <Card className="md:col-span-2 col-span-7">
          <CardHeader className="flex gap-3">
            <p className="text-md">CO2 Emissions</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="sm:text-[2em] text-[1.5em]">
              {dashboardData.co2_emission.vslue} Kg/MWh
            </p>
          </CardBody>
        </Card>
      </div>
      <Grid />
    </div>
  );
};

export default GridMonitoring;
