import { Handle, Position } from "reactflow";
import {
  Card,
  CardBody,
} from "@nextui-org/react";
import icon from "../../Assets/Grid/Utility Grid.svg";

const MainNode = ({ data, isConnectable }) => {
  return (
    <div className="text-updater-node">
      <Card className="border border-blue-800 bg-transparent text-blue-800">
        <CardBody className="grid grid-cols-2 text-center">
          <img
            src={icon}
            alt=""
            height={50}
            width={50}
            className="col-span-1"
          />
          <div className="flex flex-col">
            <h1>{data.label}</h1>
            <p>{data.value} kWh</p>
          </div>
        </CardBody>
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default MainNode;
