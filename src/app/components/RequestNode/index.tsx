import React, {useState} from "react"
import {Handle, Position} from "react-flow-renderer"
import Options from "./Opitons"
import {SettingsOutlined} from "@mui/icons-material/"
import styles from "./styles.module.css"
import DefaultNode from "../DefaultNode";
import {Typography} from "@mui/material";

const RequestNode = (): JSX.Element => {
    const [open, setOpen] = useState(false)
    const handleModal = () => setOpen(!open)

    const icon = (
        <SettingsOutlined
            sx={{color: "white"}}
            onClick={() => handleModal()}
        />
    )
    return (
        <>
            <DefaultNode label="Request" icon={icon} size="large">
                <div className={styles.NodeRequest}>
                    <Typography sx={{fontFamily: "Exo"}}>Escolha sua URL</Typography>
                    <div className={styles.NodeRequest__status}>
                        <div className={styles.NodeRequest__success}>Success</div>
                        <div className={styles.NodeRequest__error}>Error</div>
                    </div>
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
            </DefaultNode>
            <Options
                open={open}
                handleOpen={handleModal}
                handleClose={handleModal}
            />
        </>

    )
}

const primaryNode = {top: 61}
const secondaryNode = {top: 122}

export default RequestNode
