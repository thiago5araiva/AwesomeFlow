import React, {useCallback, useEffect, useState} from "react"
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Edge,
  Node
} from "react-flow-renderer"

import {RootState, useAppSelector} from "./store/"
import {nodeTypes} from './store/slices/nodes'


const HorizontalFlow = () => {
  const node = useAppSelector((state:RootState) => state.node)
  const edge = useAppSelector((state:RootState) => state.edge)
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds:Node[]) => {
      return applyNodeChanges(changes, nds)
    }),
    [setNodes]
  )

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds:Edge[]) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      return setEdges((els: Edge[]) => addEdge(params, els))
    },
    [setEdges]
  )
  useEffect(()=>{
    setNodes(node)
    setEdges(edge)
  },[node,edge])
  
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
  )
}

export default HorizontalFlow
