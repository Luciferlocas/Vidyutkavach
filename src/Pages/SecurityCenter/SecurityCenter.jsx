import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import SecurityTable from "../../Components/Tables/SecurityTable";
import AccessLogTable from "../../Components/Tables/AccessLogTable";
import { useNavigate } from "react-router";

const SecurityCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em]">
      <Card className="col-span-12">
        <CardHeader className="flex justify-end">
          <div className="text-md flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> Last 24
            hours
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-around gap-2">
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Security Alerts</p>
              <p className="sm:text-[1.5em] text-[1.2em]">52</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Blocked Users</p>
              <p className="sm:text-[1.5em] text-[1.2em]">52</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Surveillance Users</p>
              <p className="sm:text-[1.5em] text-[1.2em]">65</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Honeypot Alerts</p>
              <p className="sm:text-[1.5em] text-[1.2em]">32</p>
            </div>
          </div>
        </CardBody>
      </Card>

      <SecurityTable heading="security" />

      <SecurityTable heading="honeypot"/>

      <AccessLogTable />
      <div className="sm:grid grid sm:grid-cols-1 grid-cols-12 gap-4 sm:col-span-2 col-span-12">
        <Card className="sm:col-span-2 col-span-3">
          <CardHeader className="flex gap-3">
            <p className="text-md">IDS</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[1.5em] text-center">Active</p>
          </CardBody>
        </Card>
        <Card className="sm:col-span-2 col-span-3">
          <CardHeader className="flex gap-3">
            <p className="text-md">Firewall</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[1.5em] text-center">Active</p>
          </CardBody>
        </Card>
        <Card isPressable onPress={() => navigate("nginx")} className="sm:col-span-2 col-span-6">
          <CardHeader className="flex gap-3">
            <p className="text-md">NGiИX</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[1.2em] text-center">Server Log Stream &#129185;</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SecurityCenter;
