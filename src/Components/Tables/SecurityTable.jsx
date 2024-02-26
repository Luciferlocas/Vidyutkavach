import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Select,
  SelectItem,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const SecurityTable = ({ heading }) => {
  return (
    <Card className="col-span-12 min-h-96">
      <CardHeader className="flex justify-between">
        <p className="text-md capitalize">{heading} Alerts</p>
        <Select
          aria-label="Options to sort"
          className="max-w-32"
          labelPlacement="outside"
          placeholder="Select option"
        >
          <SelectItem key="Last 24 hours">Last 24 hours</SelectItem>
          <SelectItem key="Last 7 days">Last 7 days</SelectItem>
          <SelectItem key="Last 30 days">Last 30 days</SelectItem>
        </Select>
      </CardHeader>
      <Divider />
      <CardBody></CardBody>
      <Divider />
      <CardFooter className="flex justify-end">
        <Button variant="flat">
          <NavLink to={heading + "alerts"} className="capitalize">
            View Detailed {heading} Alert Logs
          </NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SecurityTable;
