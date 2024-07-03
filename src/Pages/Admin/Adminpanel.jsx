import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Input,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import AdminContext from "../../Context/Admin/AdminContext";

const Adminpanel = () => {
  const { roles, user, setUser, create, image } = useContext(AdminContext);
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid place-content-center lg:pl-[16.5rem] px-4 lg:pr-[1rem] my-[1em] h-[calc(100vh-6em)] w-12/12">
      {image ? (
        <Card className="sm:w-96 w-[calc(75vw)] dark:bg-gradient-to-tl from-zinc-800 to-zinc-950">
          <CardHeader className="flex gap-3">
            <p className="text-lg font-bold">QR Code</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <img className="rounded-lg" src={`data:image/png;base64${image}`} alt="QR" />
          </CardBody>
        </Card>
      ) : (
        <Card className="sm:w-96 w-[calc(75vw)] dark:bg-gradient-to-tl from-zinc-800 to-zinc-950">
          <CardHeader className="flex gap-3">
            <p className="text-lg font-bold">Create User</p>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col gap-4 py-4">
            <Input
              isRequired
              type="text"
              label="Employee ID"
              placeholder="Enter employee ID"
              labelPlacement="outside"
              name="empID"
              onChange={handleInput}
              value={user.empID}
            />
            <Input
              type="text"
              label="Username"
              placeholder="Enter username"
              labelPlacement="outside"
              name="username"
              onChange={handleInput}
              value={user.username}
            />
            <Input
              type="email"
              label="Email"
              placeholder="Enter the Email"
              labelPlacement="outside"
              name="email"
              onChange={handleInput}
              value={user.email}
            />
            <Select
              items={roles}
              label="Select Role"
              labelPlacement="outside"
              placeholder="See role"
              name="role"
              onChange={handleInput}
            >
              {(roles) => (
                <SelectItem key={roles.name} value={roles.name}>
                  {roles.name}
                </SelectItem>
              )}
            </Select>
            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="Enter the password"
              labelPlacement="outside"
              name="password"
              onChange={handleInput}
              value={user.password}
            />
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-end">
            <Button
              color="primary"
              variant="flat"
              className="font-bold"
              onClick={() => {
                create();
                setUser([]);
              }}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Adminpanel;
