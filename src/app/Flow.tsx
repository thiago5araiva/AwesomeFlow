import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Edge,
  MiniMap,
  Node,
} from 'react-flow-renderer';
import DrawerComponent from './components/Drawer';

import { types } from './store/flow/Slice';

const HorizontalFlow = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds: Node[]) => applyNodeChanges(changes, nds)),

    [setNodes]
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

  const handleNode = (node: Node) => {
    setNodes((prevState) => [...prevState, node]);
  };

  return (
    <>
      <DrawerComponent handleNode={handleNode} />
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
    </>
  );
};

export default HorizontalFlow;
