import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Edge,
  MiniMap,
  Node,
} from "react-flow-renderer";

import { RootState, useAppDispatch, useAppSelector } from "./store/";
import { types, updateNode } from "./store/slices/nodes";

const HorizontalFlow = () => {
  const dispatch = useAppDispatch();
  const node = useAppSelector((state: RootState) => state.node);
  const edge = useAppSelector((state: RootState) => state.edge);

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: any) => {
      setNodes((nds: Node[]) => applyNodeChanges(changes, nds));
    },
    [nodes]
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      return setEdges((els: Edge[]) => addEdge(params, els));
    },
    [setEdges]
  );
  useEffect(() => {
    setNodes(node);
    setEdges(edge);
  }, [node, edge]);

  useEffect(() => {
    dispatch(updateNode(nodes));
    setNodes(node);
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={types}
      fitView
      attributionPosition="bottom-left"
    >
      <Background gap={24} size={1} />
      <MiniMap />
    </ReactFlow>
  );
};

export default HorizontalFlow
