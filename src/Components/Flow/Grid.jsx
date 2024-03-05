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
import HydroIcon from "../../Assets/Grid/HydroIcon";
import ThermalIcon from "../../Assets/Grid/ThermalIcon"
import BatteryIcon from "../../Assets/Grid/BatteryIcon";
import UtilityGrid from "../../Assets/Grid/UtilityGrid";
import PowerIcon from "../../Assets/Grid/PowerIcon";

const initialNodes = [
  {
    id: "node-1",
    type: "mainnode",
    position: { x: 0, y: -100 },
    data: { label: "Utility Grid", value: 100 , top: false, icon: <UtilityGrid/>},
  },
  {
    id: "1",
    type: "smallnode",
    targetPosition: "bottom",
    position: { x: -100, y: 200 },
    data: { icon: <SolarIcon />, p: "left", pr: "right" },
  },
  {
    id: "2",
    type: "smallnode",
    targetPosition: "top",
    position: { x: 200, y: 200 },
    data: { icon: <WindIcon />, p: "right", pr: "left" },
  },
  {
    id: "3",
    type: "smallnode",
    targetPosition: "top",
    position: { x: -100, y: 500 },
    data: { icon: <HydroIcon />, p: "left", pr: "right" },
  },
  {
    id: "4",
    type: "smallnode",
    targetPosition: "top",
    position: { x: 200, y: 500 },
    data: { icon: <BatteryIcon />, p: "right", pr: "left" },
  },
  {
    id: "5",
    type: "smallnode",
    targetPosition: "top",
    position: { x: -100, y: 700 },
    data: { icon: <ThermalIcon />, p: "left", pr: "right" },
  },
  {
    id: "6",
    type: "mainnode",
    position: { x: -15, y: 900 },
    data: { label: "Power Export Grid", value: 150 , top: true, icon: <PowerIcon />},
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
    data: { label: "Solar Plant A", value: 35, p: "right", pr: "left" },
  },
  {
    id: "node-5",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 200 },
    data: { label: "Solar Plant B", value: 0, p: "right", pr: "left" },
  },
  {
    id: "node-6",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 300 },
    data: { label: "Solar Plant C", value: 40, p: "right", pr: "left" },
  },
  {
    id: "node-7",
    type: "mininode",
    targetPosition: "top",
    position: { x: 350, y: 100 },
    data: { label: "Wind Plant A", value: 0, p: "left", pr: "right" },
  },
  {
    id: "node-8",
    type: "mininode",
    targetPosition: "top",
    position: { x: 350, y: 200 },
    data: { label: "Wind Plant B", value: 40, p: "left", pr: "right" },
  },
  {
    id: "node-9",
    type: "mininode",
    targetPosition: "top",
    position: { x: 350, y: 300 },
    data: { label: "Wind Plant C", value: 250, p: "left", pr: "right" },
  },
  {
    id: "node-10",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 500 },
    data: {
      label: "Hydroelectric Power Plant A",
      value: 250,
      p: "right",
      pr: "left",
    },
  },
  {
    id: "node-11",
    type: "mininode",
    targetPosition: "top",
    position: { x: 350, y: 450 },
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
    position: { x: 350, y: 550 },
    data: {
      label: "Battery Storage B",
      value: 250,
      p: "left",
      pr: "right",
    },
  },
  {
    id: "node-13",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 650 },
    data: {
      label: "Thermal Energy Storage A",
      value: 250,
      p: "right",
      pr: "left",
    },
  },
  {
    id: "node-14",
    type: "mininode",
    targetPosition: "top",
    position: { x: -350, y: 750 },
    data: {
      label: "Thermal Energy Storage A",
      value: 0,
      p: "right",
      pr: "left",
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
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-3",
    source: "1",
    target: "node-4",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-4",
    source: "1",
    target: "node-5",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-5",
    source: "1",
    target: "node-6",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-6",
    source: "2",
    target: "node-7",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-7",
    source: "2",
    target: "node-8",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-8",
    source: "2",
    target: "node-9",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-9",
    source: "3",
    target: "node-10",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-10",
    source: "node-1",
    target: "3",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-11",
    source: "node-1",
    target: "4",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-12",
    source: "4",
    target: "node-11",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-13",
    source: "4",
    target: "node-12",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-14",
    source: "node-1",
    target: "5",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-15",
    source: "5",
    target: "node-13",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-16",
    source: "5",
    target: "node-14",
    sourceHandle: "b",
    animated: true,
    type: "step",
  },
  {
    id: "edge-17",
    source: "node-1",
    target: "6",
    sourceHandle: "b",
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
