import { useCallback, useState } from "react";
import ReactFlow, {
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import MainNode from "./MainNode";
import Mininode from "./MiniNode";
import SmallNode from "./SmallNode";
import SolarIcon from "../../Assets/Grid/SolarIcon";
import WindIcon from "../../Assets/Grid/WindIcon";
import HydroIcon from "../../Assets/Grid/HydroIcon";

const initialNodes = [
  {
    id: "node-1",
    type: "mainnode",
    position: { x: 0, y: -100 },
    data: { label: "Utility Grid", value: 100 },
  },
  {
    id: "1",
    type: "smallnode",
    targetPosition: "bottom",
    position: { x: -100, y: 200 },
    data: { icon: <SolarIcon /> },
  },
  {
    id: "2",
    type: "smallnode",
    targetPosition: "top",
    position: { x: 200, y: 200 },
    data: { icon: <WindIcon /> },
  },
  // {
  //   id: "3",
  //   type: "smallnode",
  //   targetPosition: "top",
  //   position: { x: 0, y: 600 },
  //   data: { icon: <HydroIcon /> },
  // },
  {
    id: "node-4",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 100 },
    data: { label: "Solar Plant A", value: 35 },
  },
  {
    id: "node-5",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 200 },
    data: { label: "Solar Plant B", value: 0 },
  },
  {
    id: "node-6",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 300 },
    data: { label: "Solar Plant C", value: 40 },
  },
];

const initialEdges = [
  {
    id: "edge-1",
    source: "node-1",
    target: "1",
    sourceHandle: "a",
    animated: true,
    type: "step"
  },
  {
    id: "edge-2",
    source: "node-1",
    target: "2",
    sourceHandle: "b",
    animated: true,
    type: "step"
  },
  {
    id: "edge-3",
    source: "1",
    target: "node-4",
    sourceHandle: "b",
    animated: true,
    type: "step"
  },
  {
    id: "edge-4",
    source: "1",
    target: "node-5",
    sourceHandle: "b",
    animated: true,
    type: "step"
  },
  {
    id: "edge-5",
    source: "1",
    target: "node-6",
    sourceHandle: "b",
    animated: true,
    type: "step"
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  mainnode: MainNode,
  smallnode: SmallNode,
  mininode: Mininode,
};

function Grid() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      nodesDraggable={false}
      maxZoom={1}
      minZoom={0.6}
    />
  );
}

export default Grid;
