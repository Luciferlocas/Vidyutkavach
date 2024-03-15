import { useCallback, useState } from "react";
import ReactFlow, {
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
import BioIcon from "../../Assets/Grid/BioIcon";
import BatteryIcon from "../../Assets/Grid/BatteryIcon";
import UtilityGrid from "../../Assets/Grid/UtilityGrid";
import PowerIcon from "../../Assets/Grid/PowerIcon";
import TransformerIcon from "../../Assets/Grid/TransformerIcon";
import ResidentialIcon from "../../Assets/Grid/ResidentialIcon";

const initialNodes = [
  {
    id: "node-1",
    type: "mainnode",
    position: { x: -200, y: -216 },
    data: {
      label: "Utility Grid",
      value: 100,
      top: false,
      p: "right",
      color: "blue",
      icon: <UtilityGrid />,
    },
  },
  {
    id: "1",
    type: "smallnode",
    targetPosition: "bottom",
    position: { x: -350, y: 100 },
    data: { icon: <SolarIcon />, p: "bottom", pr: "top" },
  },
  {
    id: "2",
    type: "smallnode",
    targetPosition: "top",
    position: { x: -70, y: 100 },
    data: { icon: <WindIcon />, p: "bottom", pr: "top" },
  },
  {
    id: "3",
    type: "smallnode",
    targetPosition: "top",
    position: { x: 190, y: 100 },
    data: { icon: <BioIcon />, p: "bottom", pr: "top" },
  },
  {
    id: "4",
    type: "smallnode",
    targetPosition: "top",
    position: { x: 500, y: 100 },
    data: { icon: <BatteryIcon />, p: "bottom", pr: "top" },
  },
  {
    id: "6",
    type: "mainnode",
    position: { x: 1040, y: -150 },
    data: {
      label: "Housing Community A",
      value: 150,
      top: true,
      color: "blue",
      icon: <PowerIcon />,
    },
  },
  {
    id: "7",
    type: "mainnode",
    position: { x: 1300, y: -150 },
    data: {
      label: "Housing community B",
      value: 50,
      top: true,
      color: "blue",
      icon: <PowerIcon />,
    },
  },
  {
    id: "8",
    type: "smallnode",
    position: { x: 400, y: -210 },
    data: { icon: <TransformerIcon />, p: "right", pr: "left" },
  },
  {
    id: "9",
    type: "mainnode",
    position: { x: 800, y: 100 },
    data: {
      label: "In house power consumption",
      value: 215,
      top: true,
      color: "yellow",
      icon: <ResidentialIcon />,
    },
  },
  {
    id: "node-4",
    type: "mininode",
    targetPosition: "top",
    position: { x: -290, y: 200 },
    data: { label: "Solar Plant A", value: 35, p: "left", pr: "right" },
  },
  {
    id: "node-5",
    type: "mininode",
    targetPosition: "top",
    position: { x: -290, y: 300 },
    data: { label: "Solar Plant B", value: 0, p: "left", pr: "right" },
  },
  {
    id: "node-6",
    type: "mininode",
    targetPosition: "top",
    position: { x: -290, y: 400 },
    data: { label: "Solar Plant C", value: 40, p: "left", pr: "right" },
  },
  {
    id: "node-7",
    type: "mininode",
    targetPosition: "top",
    position: { x: -10, y: 200 },
    data: { label: "Wind Plant A", value: 0, p: "left", pr: "right" },
  },
  {
    id: "node-8",
    type: "mininode",
    targetPosition: "top",
    position: { x: -10, y: 300 },
    data: { label: "Wind Plant B", value: 40, p: "left", pr: "right" },
  },
  {
    id: "node-9",
    type: "mininode",
    targetPosition: "top",
    position: { x: -10, y: 400 },
    data: { label: "Wind Plant C", value: 250, p: "left", pr: "right" },
  },
  {
    id: "node-10",
    type: "mininode",
    targetPosition: "top",
    position: { x: 260, y: 200 },
    data: {
      label: "Biogas Plant A",
      value: 250,
      p: "left",
      pr: "left",
    },
  },
  {
    id: "node-11",
    type: "mininode",
    targetPosition: "top",
    position: { x: 560, y: 200 },
    data: {
      label: "Battery Storage A",
      value: 250,
      p: "left",
      pr: "right",
    },
  },
  {
    id: "node-12",
    type: "mininode",
    targetPosition: "top",
    position: { x: 560, y: 300 },
    data: {
      label: "Battery Storage B",
      value: 250,
      p: "left",
      pr: "right",
    },
  },
];

const initialEdges = [
  {
    id: "edge-1",
    source: "node-1",
    target: "1",
    sourceHandle: "a",
    animated: true,
    type: "step",
  },
  {
    id: "edge-2",
    source: "node-1",
    target: "2",
    sourceHandle: "a",
    animated: true,
    type: "step",
  },
  {
    id: "edge-3",
    source: "1",
    target: "node-4",
    animated: true,
    type: "step",
  },
  {
    id: "edge-4",
    source: "1",
    target: "node-5",
    animated: true,
    type: "step",
  },
  {
    id: "edge-5",
    source: "1",
    target: "node-6",
    animated: true,
    type: "step",
  },
  {
    id: "edge-6",
    source: "2",
    target: "node-7",
    animated: true,
    type: "step",
  },
  {
    id: "edge-7",
    source: "2",
    target: "node-8",
    animated: true,
    type: "step",
  },
  {
    id: "edge-8",
    source: "2",
    target: "node-9",
    animated: true,
    type: "step",
  },
  {
    id: "edge-9",
    source: "3",
    target: "node-10",
    animated: true,
    type: "step",
  },
  {
    id: "edge-10",
    source: "node-1",
    target: "3",
    sourceHandle: "a",
    animated: true,
    type: "step",
  },
  {
    id: "edge-11",
    source: "node-1",
    target: "4",
    sourceHandle: "a",
    animated: true,
    type: "step",
  },
  {
    id: "edge-12",
    source: "4",
    target: "node-11",
    animated: true,
    type: "step",
  },
  {
    id: "edge-13",
    source: "4",
    target: "node-12",
    animated: true,
    type: "step",
  },
  {
    id: "edge-17",
    source: "8",
    target: "6",
    animated: true,
    type: "step",
  },
  {
    id: "edge-18",
    source: "8",
    target: "7",
    animated: true,
    type: "step",
  },
  {
    id: "edge-19",
    source: "node-1",
    target: "8",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-20",
    source: "node-1",
    target: "9",
    sourceHandle: "a",
    animated: true,
    type: "step",
  },
];

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
      maxZoom={1.2}
      minZoom={0.6}
    />
  );
}

export default Grid;
