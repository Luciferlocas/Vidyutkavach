import { Handle, Position } from "reactflow";
import { Card, CardBody } from "@nextui-org/react";

const MainNode = ({ data, isConnectable }) => {
  return (
    <div className="text-updater-node">
      {data.top && <Handle type="target" />}
      {data.p && <Handle type="source" position={data.p} id="b" />}
      <Card className={`border border-${data.color}-800 bg-transparent text-${data.color}-800 max-w-60`}>
        <CardBody className="grid grid-cols-2 text-center">
          {data.icon}
          <div className="flex flex-col">
            <h1>{data.label}</h1>
            <p>{data.value} kW</p>
          </div>
        </CardBody>
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default MainNode;
