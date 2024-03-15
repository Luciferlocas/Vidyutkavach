import { Handle } from "reactflow";
import {
  Card,
  CardBody,
} from "@nextui-org/react";

function SmallNode({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle type="target" position={data.pr} id="c"/>
      <Card className="max-w-[400px]">
        <CardBody>
          {data.icon}
        </CardBody>
      </Card>
      <Handle
        type="source"
        position={data.p}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default SmallNode;
