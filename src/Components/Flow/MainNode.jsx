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
import { mainIcon } from "../../Assets/Grid/mainIcon";

const handleStyle = { left: 10 };

const MainNode = ({ data, isConnectable }) => {
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <Card className="border border-blue-950 bg-transparent text-blue-950">
        <CardBody className="flex flex-col gap-2 text-center">
          <h1>Utility Grid</h1>
          <p>15kWh</p>
        </CardBody>
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
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
