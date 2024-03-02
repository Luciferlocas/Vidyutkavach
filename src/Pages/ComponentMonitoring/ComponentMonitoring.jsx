import React from "react";

import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import CompMonitorTable from "../../Components/Tables/CompMonitorTable";
import { useNavigate } from "react-router";
const ComponentMonitoring = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("generationdetail");
  };
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] h-screen">
      <Card className="col-span-12">
        <CardHeader className="flex justify-between text-xl">
          <p className="text-md">Power Generation Components</p>
          <div className="text-md flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Live
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CompMonitorTable />
          <Button
            className="mt-8 text-xs font-medium self-end "
            onClick={handleNavigate}
          >
            More Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ComponentMonitoring;
