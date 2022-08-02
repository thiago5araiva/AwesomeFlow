import { store } from '..';

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from 'react-flow-renderer';
import { setEdges, setNodes } from './Slice';

const { dispatch, getState } = store;

export const onNodeAdd = (node: Node<any>) => {
  dispatch(setNodes([node]));
};

export const onNodesChange = (changes: NodeChange[]) => {
  const nodes = getState().flow.nodes;
  const updatedNodes = applyNodeChanges(changes, nodes);
  dispatch(setNodes(updatedNodes));
};

export const onEdgesChange = (changes: EdgeChange[]) => {
  const edges = getState().flow.edges;
  const updatedEdges = applyEdgeChanges(changes, edges);
  dispatch(setEdges(updatedEdges));
};

export const updateConect = (params: Edge | Connection) => {
  const edges = getState().flow.edges;
  const updatedEdges = addEdge(params, edges);
  dispatch(setEdges(updatedEdges));
};
