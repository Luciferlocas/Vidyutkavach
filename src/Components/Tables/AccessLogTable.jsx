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
  ButtonGroup,
} from "@nextui-org/react";

const AccessLogTable = () => {
  return (
    <Card className="sm:col-span-10 col-span-12 min-h-80">
      <CardHeader>
        <p className="text-md">Security Alerts</p>
      </CardHeader>
      <Divider />
      <CardBody></CardBody>
      <Divider />
      <CardFooter className="flex justify-end">
        <ButtonGroup variant="flat">
          <Button>
            Prev
          </Button>
          <Divider orientation="vertical"/>
          <Button>
            Next
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default AccessLogTable;
