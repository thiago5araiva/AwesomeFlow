import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "react-flow-renderer";
import RequestNode from "../../components/RequestNode";

export const types = { RequestNodeType: RequestNode };

let initialState: Node[] = [];

const nodes = createSlice({
  name: "node",
  initialState,
  reducers: {
    addRequestNode(state, action: PayloadAction<Node[]>) {
      return [...state, ...action.payload];
    },
    updateNode(state, action: PayloadAction<Node[]>) {
      return [...state, ...action.payload];
    },
  },
});
export const { addRequestNode, updateNode } = nodes.actions;
export default nodes.reducer;




