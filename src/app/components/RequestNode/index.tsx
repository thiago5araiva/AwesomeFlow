import { useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import NetworkPingIcon from "@mui/icons-material/NetworkPing";
import Options from "./options";
import styles from "./styles.module.css";
import { Typography } from "@mui/material";

const RequestNode = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);
  return (
    <div className={styles.NodeRequest}>
      <div className={styles.NodeRequest__header}>
        <small>Request</small>
        <NetworkPingIcon sx={{ color: "white" }} />
      </div>
      <div className={styles.NodeRequest__description}>
        <Typography sx={{ fontFamily: "Exo" }} onClick={handleModal}>
          Escolha sua URL
        </Typography>
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
  );
};

const primaryNode = { top: 61 };
const secondaryNode = { top: 122 };

export default RequestNode;
