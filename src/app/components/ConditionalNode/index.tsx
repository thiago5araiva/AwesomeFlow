import React, { useState } from "react"
import DefaultNode from "../DefaultNode"
import { SettingsInputCompositeOutlined } from "@mui/icons-material/"
import { Handle, Position } from "react-flow-renderer"
import Options from "./Options"
const ConditionalNodeComponent = () => {
  const [open, setOpen] = useState(false)
  const handleModal = () => setOpen(!open)

  const icon = (
    <SettingsInputCompositeOutlined
      sx={{ color: "white" }}
      onClick={() => handleModal()}
    />
  )
  return (
    <DefaultNode
      label="Conditional"
      description="Add Your Options"
      icon={icon}
      size="large"
    >
      <Options open={open} handleOpen={handleModal} handleClose={handleModal} />
      <Handle
        type="source"
        position={Position.Right}
        id="success"
        style={{ top: 50 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="error"
        style={{ top: 50 }}
      />
    </DefaultNode>
  )
}

export default ConditionalNodeComponent
