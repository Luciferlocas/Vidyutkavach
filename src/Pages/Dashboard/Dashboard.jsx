import React, { useState } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import DashTable from "../../Components/Tables/DashTable";
import DashChart from "../../Components/Graphs/DashChart";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Security");

  const renderTable = () => {
    switch (activeTab) {
      case "Security":
        return (
          <DashTable
            data={[
              {
                id: 1,
                is_read: false,
                timestamp: "2023-12-17T04:26:04.643+00:00",
                ip: "192.168.1.105",
                description: "Detected attempt to perform SQL injection",
              },
              {
                id: 2,
                is_read: false,
                timestamp: "2023-12-17T04:26:04.643+00:00",
                ip: "192.168.1.215",
                description: "Suspicious script detected in input",
              },
              {
                id: 3,
                is_read: false,
                timestamp: "2023-12-17T04:26:04.643+00:00",
                ip: "192.168.1.135",
                description: "Multiple failed login attempts",
              },
              {
                id: 4,
                is_read: false,
                timestamp: "2023-12-17T04:26:04.643+00:00",
                ip: "192.168.1.185",
                description: "System configuration changed",
              },
              {
                id: 5,
                is_read: false,
                timestamp: "2023-12-17T04:26:04.643+00:00",
                ip: "192.168.1.250",
                description: "Detected attempt to spoof DNS responses",
              },
            ]}
            header="Source IP"
          />
        );
      case "System Health":
        return <DashTable data={null} header="Hardware ID" />;
      case "HoneyPot Detection":
        return <DashTable data={null} header="Hardware ID" />;
      default:
        return <DashTable data={null} header="Source IP" />;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em]">
      <Card className="md:col-span-3 col-span-6">
        <CardHeader className="flex gap-3">
          <p className="text-md">Grid Status</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="sm:text-[1.5em] text-[1.3em]">Connected to the main grid</p>
        </CardBody>
      </Card>
      <Card className="md:col-span-4 col-span-6">
        <CardHeader className="flex gap-3">
          <p className="text-md">Grid Status</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="sm:flex sm:flex-row gap-4 flex flex-col justify-center">
            <div className="flex flex-col">
              <p className="sm:text-[1.8em] text-[1em]">50 KW</p>
              <p className="text-small text-default-500">Production</p>
            </div>
            <div className="sm:h-[4em] sm:w-[0.5px] h-[0.5px] w-[4em] bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="flex flex-col">
              <p className="sm:text-[1.8em] text-[1em]">30 KW</p>
              <p className="text-small text-default-500">Consumption</p>
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
          <p className="sm:text-[2.5em] text-[1.5em] text-center">75%</p>
        </CardBody>
      </Card>
      <Card className="md:col-span-3 col-span-7">
        <CardHeader className="flex gap-3">
          <p className="text-md">Geospatial Status</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="sm:text-[2.5em] text-[1.5em] text-center">75%</p>
        </CardBody>
      </Card>

      <Card className="md:col-span-6 col-span-12 min-h-76">
        <CardHeader className="flex gap-3">
          <p className="text-md">Power Generation</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <DashChart />
        </CardBody>
      </Card>
      <Card className="md:col-span-6 col-span-12 min-h-76">
        <CardHeader className="flex gap-3">
          <p className="text-md">Load Consumption</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <DashChart />
        </CardBody>
      </Card>

      <div className="grid gap-4 md:col-span-4 col-span-8">
        <Card className="col-span-2">
          <CardHeader className="flex gap-3">
            <p className="text-md">IDS</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[1.8em] text-center">Active</p>
          </CardBody>
        </Card>
        <Card className="col-span-2">
          <CardHeader className="flex gap-3">
            <p className="text-md">Firewall</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[1.8em] text-center">Active</p>
          </CardBody>
        </Card>
        <Card className="col-span-4">
          <CardHeader className="flex gap-3">
            <p className="text-md">Security Patch</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex gap-8 justify-center">
              <div className="flex flex-col">
                <p className="text-small text-default-500">Status</p>
                <p className="text-[1.5em]">Up to date</p>
              </div>
              <Divider orientation="vertical" />
              <div className="flex flex-col">
                <p className="text-small text-default-500">Last Update</p>
                <p className="text-[1.5em]">25-12-2024</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className="md:col-span-2 col-span-4">
        <CardHeader className="flex gap-3">
          <p className="text-md">Grid Status</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col">
              <p className="text-small text-default-500">Status</p>
              <p className="text-[1.5em]">3 / 3</p>
            </div>
            <Divider className="w-[4em]" />
            <div className="flex flex-col">
              <p className="text-small text-default-500">Detection</p>
              <p className="text-[1.5em]">⚠️ 5</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="md:col-span-6 col-span-12">
        <CardHeader className="flex gap-3">
          <p className="text-md">Alerts</p>
        </CardHeader>
        <Divider />
        <CardBody className="p-0 gap-2">
          <div className="flex justify-around py-2 text-[1em]">
            <button
              className={activeTab === "Security" ? "text-blue-700 underline" : ""}
              onClick={() => setActiveTab("Security")}
            >
              Security
            </button>
            <button
              className={activeTab === "System Health" ? "text-blue-700 underline" : ""}
              onClick={() => setActiveTab("System Health")}
            >
              System Health
            </button>
            <button
              className={
                activeTab === "Honeypot Detection" ? "text-blue-700 underline" : ""
              }
              onClick={() => setActiveTab("Honeypot Detection")}
            >
              Honeypot Detection
            </button>
          </div>
          <div className="overflow-y-scroll max-h-[12rem]">{renderTable()}</div>
        </CardBody>
      </Card>

      <Card className="md:col-span-3 col-span-6">
        <CardHeader className="flex gap-3">
          <p className="text-md">CO2 Emissions</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="sm:text-[2em] text-[1.5em]">90 Kg/MWh</p>
        </CardBody>
      </Card>
      <Card className="md:col-span-3 col-span-6">
        <CardHeader className="flex gap-3">
          <p className="text-md">Energy Efficiency</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="sm:text-[2em] text-[1.5em]">90 %</p>
        </CardBody>
      </Card>
      <Card className="md:col-span-6 col-span-12">
        <CardHeader className="flex gap-3">
          <p className="text-md">Active Component Status</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Nanogrids</p>
              <p className="sm:text-[1.5em] text-[1.2em]">3</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Solar Plants</p>
              <p className="sm:text-[1.5em] text-[1.2em]">5</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Wind Turbines</p>
              <p className="sm:text-[1.5em] text-[1.2em]">2</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="sm:text-[1em] text-[0.7em]">Battery Storage</p>
              <p className="sm:text-[1.5em] text-[1.2em]">4</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;
