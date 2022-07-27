import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "react-flow-renderer";
import RequestNode from "../../components/RequestNode";

export const nodeTypes = { RequestNodeType: RequestNode };

const initialState:Node[]= []

const nodes = createSlice({
  name: "node",
  initialState,
  reducers: {
    addNode(state,action:PayloadAction<Node>){
      return [...initialState,  action.payload]
    },
  },
})
export const { addNode} = nodes.actions
export default nodes.reducer




