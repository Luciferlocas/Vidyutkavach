import React, { useContext, useState } from "react";
import { Card, CardHeader, CardBody, Divider, Input, Button } from "@nextui-org/react";
import PatchChart from "../../Components/Graphs/PatchChart";
import PatchContext from "../../Context/PatchManagement/PatchContext";
import { Patch, PatchAlert, PendingTable, UpdateTable } from "../../Components/Tables/PatchTable";

const PatchManagement = () => {
  const { savePatch, setPatch, patch,  } = useContext(PatchContext);
  const handleInput = (e) => {
    setPatch({ ...patch, [e.target.name]: e.target.value });
  };
  return (
    <div className="grid grid-cols-12 gap-[1em] lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em]">
      <Card className=" col-span-2">
        <CardHeader className="flex gap-3">
          <p className="text-md">Hardware Devices</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="sm:text-[2.5em] text-[1.5em] text-center">34</p>
        </CardBody>
      </Card>
      <Card className=" col-span-2">
        <CardHeader className="flex gap-3">
          <p className="text-md">Patched Devices</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="sm:text-[2.5em] text-[1.5em] text-center">28</p>
        </CardBody>
      </Card>
      <Card className=" col-span-2">
        <CardHeader className="flex gap-3">
          <p className="text-md">Pending Patches</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="sm:text-[2.5em] text-[1.5em] text-center">6</p>
        </CardBody>
      </Card >
      <Card className=" col-span-6 p-3">
        <PatchChart />
      </Card >
      <Card className=" col-span-12 min-h-40"><Patch
        patchData={[
          {
            id: "1",
            type: "Inverter",
            total: "20",
            patched: "16",
            pending: "4"
          },
          {
            id: "2",
            type: "Battery",
            total: "25",
            patched: "17",
            pending: "8"
          }
        ]}

      />
      </Card>
      <Card className="col-span-12  flex flex-row gap-4">

        <Card className=" w-1/2 min-h-48">
        <CardHeader className="flex gap-4">
          <p className=" text-lg ">Patch Update Log</p>
        </CardHeader>
          <UpdateTable
          updateData={[
            {
              id: "1",
              time: "2023-03-15",
              name: "Smart Meter",
              version: "v1.2.5",
            },
            {
              id: "2",
              time: "2023-03-15",
              name: "Inverter",
              version: "v1.4.5",
            }
          ]}

        />
        </Card>
        <Card className=" w-1/2 min-h-48">
        <CardHeader className="flex gap-4">
          <p className=" text-lg "> Pending Patch Updations</p>
        </CardHeader>
          <PendingTable
          pendingData={[
            {
              id: "1",
              name: "HVAC Control",
              current: "v1.2.5",
              latest: "v2.2.5",
            },
            {
              id: "2",
              name: "HVAC Control",
              current: "v2.3.5",
              latest: "v2.3.6"
            }
          ]}

        />
        </Card>
      </Card>

      <Card className="col-span-12 py-1">
        <CardHeader className="flex gap-3 text-lg">
          <p className="text-md">Add New Patch</p>
        </CardHeader>
        <Divider />
        <CardBody className="col-span-12 gap-10">
          <div className="flex flex-row justify-evenly ">
            <Input
              name="company"
              // onChange={handleInput}
              // value ={patch.company}
              className="w-1/4"
              type="text"
              label="Company Name"
              labelPlacement="outside"
              placeholder="Company Name"
            ></Input>
            <Input
              name="Model"
              // value={patch.model}
              // onChange={handleInput}
              className="w-1/4"
              type="text"
              label="Model Name"
              labelPlacement="outside"
              placeholder="Model Name"
            ></Input>
            <Input
              // value = {patch.version}
              // onChange={handleInput}
              className="w-1/4"
              type="text"
              label="New Patch Version"
              labelPlacement="outside"
              placeholder="New Patch Version"
            ></Input></div>
          <Button className=" w-48 font-medium text-md self-center mt-2"
          // onClick={savePatch}
          > Create</Button>
        </CardBody>
      </Card>

      <Card className=" col-span-12 min-h-48"> 
      <CardHeader className="flex gap-4">
          <p className=" text-lg ">Patch Alerts</p>
        </CardHeader>
        <PatchAlert
        alertData={[
          {
            id: "HVAC16",
            name: "HVAC CONTROL",
            version: "v6.0",
            date: "11-12-2023",
          },
          {
           id:'PE27',
           name: "HVAC CONTROL",
           version: "v6.0",
           date: "11-12-2023",
          }
        ]}

      /> </Card>
    </div>


  )
}

export default PatchManagement
