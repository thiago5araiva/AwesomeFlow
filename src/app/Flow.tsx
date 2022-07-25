import React, { useCallback, useEffect, useReducer } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Background,
} from "react-flow-renderer";
import BTCNode from "./components/BDCNode";
const nodeTypes = { BTCNodeComponent: BTCNode };
const initialNodes: Node[] = [
  {
    id: "1",
    type: "BTCNodeComponent",
    data: { label: "Node 1" },
    position: { x: 5, y: 5 },
  },
];
const initialEdges: Edge[] = [];

const HorizontalFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);

  const onConnect = useCallback((params: any) => {
    return setEdges((els) => addEdge(params, els));
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      attributionPosition="bottom-left"
    >
      <Background gap={24} size={1} />
    </ReactFlow>
  );
};

export default HorizontalFlow;
