import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Divider,
  CardFooter,
} from "@nextui-org/react";
import CompMonitorTable from "../../Components/Tables/CompMonitorTable";
import { useNavigate } from "react-router";
import DashboardContext from "../../Context/Dashboard/DashboardContext";
const ComponentMonitoring = () => {
  const { component } = useContext(DashboardContext);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("generationdetail");
  };
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] min-h-screen">
      <Card className="col-span-12 min-h-[28em]">
        <CardHeader className="flex justify-between text-xl">
          <p className="text-md">Power Generation Components</p>
          <div className="text-md flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Live
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
          <p className="text-md">Power Consumption Components</p>
          <div className="text-md flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Live
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CompMonitorTable data={component} prop="output" unit="kW"/>
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
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Live
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CompMonitorTable
            data={[
              {
                name: "Battery Storage 1",
                status: "active",
                value: "78%",
                type: "storage",
              },
              {
                name: "Battery Storage 2",
                status: "inactive",
                value: "45%",
                type: "storage",
              },
              {
                name: "Battery Storage 3",
                status: "inactive",
                value: "0%",
                type: "storage",
              },
            ]}
            prop="storage"
            unit={null}
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
