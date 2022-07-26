import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import styles from "./styles.module.css";
import NetworkPingIcon from "@mui/icons-material/NetworkPing";
import BTCOptions from "./BDCOptions";
import {Typography} from "@mui/material";

const BDCNodeComponent = ({ data }: any) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className={styles.BTCNode}>
      <div className={styles.BTCNode__header}>
        <small>Consulta BDC</small>
        <NetworkPingIcon sx={{ color: "white" }} />
      </div>
      <div className={styles.BTCNode__description}>
        <p onClick={handleOpen} >Escolha sua URL</p>
        <BTCOptions open={open} handleOpen={handleOpen} handleClose={handleClose} />
        <div className={styles.BTCNode__status}>
          <div className={styles.BTCNode__success}>Success</div>
          <div className={styles.BTCNode__error}>Error</div>
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

export default BDCNodeComponent;
