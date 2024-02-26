import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

const NGiNX = () => {
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] h-[calc(100vh-6em)]">
      <Card className="col-span-12">
        <CardHeader>
          <p className="text-md">Security Alerts</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-center text-3xl">We will surely bring you something exciting in the future!</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default NGiNX;
