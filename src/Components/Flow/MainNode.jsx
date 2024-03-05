import { Handle, Position } from "reactflow";
import { Card, CardBody } from "@nextui-org/react";

const MainNode = ({ data, isConnectable }) => {
  return (
    <div className="text-updater-node">
      {data.top && <Handle type="target" />}
      <Card className="border border-blue-800 bg-transparent text-blue-800 max-w-52">
        <CardBody className="grid grid-cols-2 text-center">
          {data.icon}
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
