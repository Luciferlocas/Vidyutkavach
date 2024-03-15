import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Spinner,
} from "@nextui-org/react";
import DashTable from "../../Components/Tables/DashTable";
import DashChart from "../../Components/Graphs/DashChart";
import DashboardContext from "../../Context/Dashboard/DashboardContext";
import GeospaticalIcon from "../../Assets/Icons/GeospaticalIcon";

const Dashboard = () => {
  const { dashboardData, data, loading, status } = useContext(DashboardContext);
  const [activeTab, setActiveTab] = useState("Security");

  const leftGraph = [];
  const rightGraph = [];

  data.forEach((item) => {
    if (
      ["solar plants", "wind turbines plants", "utility"].includes(item.name)
    ) {
      leftGraph.push(item);
    } else if (
      ["commercial", "residential", "industrial"].includes(item.name)
    ) {
      rightGraph.push(item);
    }
  });

  // const renderTable = () => {
  //   switch (activeTab) {
  //     case "Security":
  //       return (
  //         <DashTable data={dashboardData.security_alerts} header="Source IP" />
  //       );
  //     case "System Health":
  //       return (
  //         <DashTable
  //           data={[
  //             {
  //               id: 1,
  //               timestamp: "2023-12-17T04:26:04.643+00:00",
  //               ip: "INV-93",
  //               description: "Inverter 3 Overhaeting ",
  //             },
  //             {
  //               id: 2,
  //               timestamp: "2023-12-17T04:26:04.643+00:00",
  //               ip: "BAT-1204",
  //               description: "Battery Voltage Fluctuation",
  //             },
  //           ]}
  //           header="Hardware ID"
  //         />
  //       );
  //     case "Honeypot Detection":
  //       return (
  //         <DashTable
  //           data={[
  //             {
  //               id: 1,
  //               timestamp: "2023-12-17T04:26:04.643+00:00",
  //               ip: "INV-93",
  //               description: "Inverter 3 Overhaeting ",
  //             },
  //             {
  //               id: 2,
  //               timestamp: "2023-12-17T04:26:04.643+00:00",
  //               ip: "BAT-1204",
  //               description: "Battery Voltage Fluctuation",
  //             },
  //           ]}
  //           header="SOURCE IP"
  //         />
  //       );
  //   }
  // };

  return loading ? (
    <div className="min-h-screen lg:pl-[16.5rem] grid place-content-center">
      <Spinner />
    </div>
  ) : (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] min-h-screen px-4 lg:pr-[1rem] my-[1em]">
      <Card className="md:col-span-3 col-span-6">
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
      <Card className="md:col-span-5 col-span-6">
        <CardHeader className="flex gap-3">
          <p className="text-md">Grid Status</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="sm:flex sm:flex-row flex flex-col justify-around">
            <div className="flex flex-col">
              <p className="sm:text-[1.8em] text-[1em]">
                {status.find((item) => item._id === "output").totalValue} KW
              </p>
              <p className="text-small text-default-500">Production</p>
            </div>
            <div className="sm:h-[4em] sm:w-[0.5px] h-[0.5px] w-[4em] bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="flex flex-col">
              <p className="sm:text-[1.8em] text-[1em]">
                {status.find((item) => item._id === "input").totalValue} KW
              </p>
              <p className="text-small text-default-500">Consumption</p>
            </div>
            <div className="sm:h-[4em] sm:w-[0.5px] h-[0.5px] w-[4em] bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="flex flex-col">
              <p className="sm:text-[1.8em] text-[1em]">
                {(status.find((item) => item._id === "output").totalValue) - (status.find((item) => item._id === "input").totalValue)} KW
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
            )}{" "}
            KW
          </p>
        </CardBody>
      </Card>
      <Card className="md:col-span-2 col-span-7">
        <CardHeader className="flex gap-3">
          <p className="text-md">Geospatial Status</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="grid place-content-center">
            <GeospaticalIcon />
          </p>
        </CardBody>
      </Card>

      <Card className="md:col-span-6 col-span-12 min-h-76">
        <CardHeader className="flex gap-3">
          <p className="text-md">Power Generation</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <DashChart data={leftGraph} />
        </CardBody>
      </Card>
      <Card className="md:col-span-6 col-span-12 min-h-76">
        <CardHeader className="flex gap-3">
          <p className="text-md">Load Consumption</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <DashChart data={rightGraph} />
        </CardBody>
      </Card>

      {/* <div className="grid gap-4 md:col-span-4 col-span-8">
        <Card className="col-span-2">
          <CardHeader className="flex gap-3">
            <p className="text-md">IDS</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[1.8em] text-center capitalize">
              {dashboardData.ids}
            </p>
          </CardBody>
        </Card>
        <Card className="col-span-2">
          <CardHeader className="flex gap-3">
            <p className="text-md">Firewall</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-[1.8em] text-center capitalize">
              {dashboardData.firewall}
            </p>
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
          <p className="text-md">Honeypot</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col">
              <p className="text-small text-default-500">Status</p>
              <p className="text-[1.5em]">
                {dashboardData.honeypot.active} / {dashboardData.honeypot.total}
              </p>
            </div>
            <Divider className="w-[4em]" />
            <div className="flex flex-col">
              <p className="text-small text-default-500">Detection</p>
              <p className="text-[1.5em]">
                ⚠️ {dashboardData.honeypot.detections}
              </p>
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
              className={
                activeTab === "Security" ? "text-blue-700 underline" : ""
              }
              onClick={() => setActiveTab("Security")}
            >
              Security
            </button>
            <button
              className={
                activeTab === "System Health" ? "text-blue-700 underline" : ""
              }
              onClick={() => setActiveTab("System Health")}
            >
              System Health
            </button>
            <button
              className={
                activeTab === "Honeypot Detection"
                  ? "text-blue-700 underline"
                  : ""
              }
              onClick={() => setActiveTab("Honeypot Detection")}
            >
              Honeypot Detection
            </button>
          </div>
          <div className="overflow-y-scroll max-h-[12rem]">{renderTable()}</div>
        </CardBody>
      </Card> */}

      <Card className="md:col-span-3 col-span-6">
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
      <Card className="md:col-span-3 col-span-6">
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
