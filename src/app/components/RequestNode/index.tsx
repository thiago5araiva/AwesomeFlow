import { useState } from "react"
import { Handle, Position } from "react-flow-renderer"
import Options from "./Opitons"

import { Typography } from "@mui/material"
import { SettingsOutlined } from "@mui/icons-material/"
import styles from "./styles.module.css"

const RequestNode = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const handleModal = () => setOpen(!open)

  const icon = (
    <SettingsOutlined sx={{ color: "white" }} onClick={handleModal} />
  )

  return (
    <div className={styles.NodeRequest}>
      <div className={styles.NodeRequest__header}>
        <small>Request</small>
        {icon}
      </div>
      <div className={styles.NodeRequest__description}>
        <Typography sx={{ fontFamily: "Exo" }}>Escolha sua URL</Typography>
        <Options
          open={open}
          handleOpen={handleModal}
          handleClose={handleModal}
        />
        <div className={styles.NodeRequest__status}>
          <div className={styles.NodeRequest__success}>Success</div>
          <div className={styles.NodeRequest__error}>Error</div>
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id="success"
          style={primaryNode}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="error"
          style={secondaryNode}
        />
      </div>
    </div>
  )
}

const primaryNode = { top: 61 }
const secondaryNode = { top: 122 }

export default RequestNode
