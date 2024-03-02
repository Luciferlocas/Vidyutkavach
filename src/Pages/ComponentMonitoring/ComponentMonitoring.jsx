import React from "react";

import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
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
        <CardHeader className="flex gap-3">
          <p className="text-md">Power Generation Components</p>
        </CardHeader>
        <CardBody>
          <CompMonitorTable />
          <Button
            className=" w-24 text-xs font-medium self-end "
            // onClick={handleNavigate}
          >
            More Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ComponentMonitoring;
