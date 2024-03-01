import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

function SmallNode({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <Card className="max-w-[400px]">
        <CardBody>
          {data.icon}
        </CardBody>
      </Card>
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default SmallNode;
