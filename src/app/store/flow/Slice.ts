import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Edge, Node } from 'react-flow-renderer';
import RequestNode from '../../components/RequestNode';

interface IInitialstate {
  nodes: Node[];
  edges: Edge[];
}

export const types = { RequestNodeType: RequestNode };

const initialState: IInitialstate = {
  nodes: [],
  edges: [],
};
const flow = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    setNodes(state: IInitialstate, action: PayloadAction<Node[]>) {
      debugger;
      const tempNodes = action.payload;
      if (tempNodes.length > 0) {
        state.nodes = [...state.nodes, ...tempNodes];
      }
    },
    setEdges(state: IInitialstate, action: PayloadAction<Edge[]>) {
      const tempEdges = action.payload;
      if (tempEdges.length > 0) {
        state.edges = [...state.edges, ...tempEdges];
      }
    },

    deleteNodes(state: IInitialstate, action: PayloadAction<Node>) {
      const tempNodes = state.nodes.filter((node) => {
        return node.id !== action.payload.id;
      });
      state.nodes = tempNodes;
    },
    deleteEdges(state: IInitialstate, action: PayloadAction<Edge>) {
      const tempEdges = state.edges.filter((edge) => {
        return edge.id !== action.payload.id;
      });
      state.edges = tempEdges;
    },

    clearContext() {
      return initialState;
    },
  },
});

export const { clearContext, deleteEdges, deleteNodes, setEdges, setNodes } =
  flow.actions;
export default flow.reducer;
