import {createSlice} from "@reduxjs/toolkit";
import {Edge} from "react-flow-renderer";

const initialState:Edge[] = []
const edges = createSlice({
    name: 'edge',
    initialState,
    reducers:{}
})
export default edges.reducer