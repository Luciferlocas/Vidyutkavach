import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Divider,
  CardFooter,
} from "@nextui-org/react";
import { useNavigate } from "react-router";
import DashboardContext from "../../Context/Dashboard/DashboardContext";
import CompMonitorTable from "../../Components/Tables/CompMonitorTable";

const ComponentMonitoring = () => {
  const { component, stats, turnOn } = useContext(DashboardContext);
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("generationdetail");
  };
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] min-h-screen">
      <Card className="col-span-12 min-h-[28em]">
        <CardHeader className="flex justify-between text-xl">
          <p className="text-md">Power Consumption Components</p>
          <div className="text-md flex items-center gap-2">
            {/* <div
              className={`w-2 h-2 ${
                component.length ? "bg-green-500" : "bg-red-800"
              } rounded-full`}
            ></div>{" "}
            {component.length ? "Live" : "Offline"} */}
            <Button
              color={`${stats > 0 ? "danger" : "primary"}`}
              variant="flat"
              onClick={() => turnOn()}
            >
              {stats > 0 ? "Stop" : "Start"}
            </Button>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CompMonitorTable data={component} prop="input" unit="kW" />
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-end">
          <Button className="text-xs font-medium" onClick={handleNavigate}>
            More Details
          </Button>
        </CardFooter>
      </Card>

      <Card className="col-span-12 min-h-[24em]">
        <CardHeader className="flex justify-between text-xl">
          <p className="text-md">Power Generation Components</p>
          <div className="text-md flex items-center gap-2">
            <div
              className={`w-2 h-2 ${
                component.length ? "bg-green-500" : "bg-red-800"
              } rounded-full`}
            ></div>{" "}
            {/* {component.length ? "Live" : "Offline"} */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CompMonitorTable data={component} prop="output" unit="kW" />
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button className="text-xs font-medium" onClick={handleNavigate}>
            More Details
          </Button>
        </CardFooter>
      </Card>

      <Card className="col-span-12 min-h-[24em]">
        <CardHeader className="flex justify-between text-xl">
          <p className="text-md">Energy Storage</p>
          <div className="text-md flex items-center gap-2">
            <div
              className={`w-2 h-2 ${
                component.length ? "bg-green-500" : "bg-red-800"
              } rounded-full`}
            ></div>{" "}
            {/* {component.length ? "Live" : "Offline"} */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CompMonitorTable
            data={component}
            prop="storage"
            unit="kW"
            color="g"
          />
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button className="text-xs font-medium" onClick={handleNavigate}>
            More Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ComponentMonitoring;
