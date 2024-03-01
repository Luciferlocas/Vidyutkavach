import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import {
  Card,
  CardBody,
} from "@nextui-org/react";

function Mininode({ data }) {
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Right} />
      <Card className={`${data.value ? "text-green-700 border-green-700" : "text-zinc-700 border-zinc-700"} border bg-transparent text-sm`}>
        <CardBody className="flex flex-col text-center min-w-40">
          <h1>{data.label}</h1>
          <p>{data.value} kWh</p>
        </CardBody>
      </Card>
    </div>
  );
}

export default Mininode;
