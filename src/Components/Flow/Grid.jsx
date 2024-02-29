import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "hidden-1",
    type: "Utility Grid",
    data: { label: "Utility gird" },
    position: { x: 250, y: 5 },
    style: {
      background: "#fff",
      fontSize: 12,
      border: "1px solid black",
      padding: 5,
      borderRadius: 15,
      height: 100,
    },
  },
  { id: "hidden-2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "hidden-3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  { id: "hidden-4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
];

const initialEdges = [
  { id: "hidden-e1-2", source: "hidden-1", target: "hidden-2" },
  { id: "hidden-e1-3", source: "hidden-1", target: "hidden-3" },
  { id: "hidden-e3-4", source: "hidden-3", target: "hidden-4" },
];

const Grid = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    ></ReactFlow>
  );
};

export default Grid;
