import React, { memo, useState } from "react"
import DefaultNode from "../DefaultNode"
import { SettingsInputCompositeOutlined } from "@mui/icons-material/"
import { Handle, Position } from "react-flow-renderer"
import Options from "./Options"
import { Typography } from "@mui/material";
import styles from './styles.module.css'

const ConditionalNodeComponent = () => {
  const [ open, setOpen ] = useState(false)
  const [ handles, handlesSet ] = useState<any>([])
  const handleModal = () => setOpen(!open)

  const handleOptions = ( options: any ) => {
    handlesSet(options.data)
    return options
  }

  const icon = (
    <SettingsInputCompositeOutlined
      sx={ { color: "white" } }
      onClick={ () => handleModal() }
    />
  )
  return (
    <>
      <DefaultNode
        label="Conditional"
        icon={ icon }
        size="large"
      >
        <div className={ styles.body } style={ { height: handles.length === 0 ? 30 : handles.length * 20 } }>
          <Typography sx={ { fontFamily: 'Exo' } } align='center'>Condicionais</Typography>
          <Handle
            type="target"
            position={ Position.Left }
            id="error"
            style={ { top: 55 } }
          />
          <div>
            { handles.map(( item: any, index: number ) => (
              <div className={ styles.conditions } key={ index }>
                <Handle
                  type="target"
                  position={ Position.Right }
                  id="error"
                  style={ { top: 12 } }
                />
                <Typography sx={ { fontFamily: 'Exo', fontSize: 14 } }
                            align='center'>{ `C${ index + 1 }` }</Typography>
              </div>
            )) }
          </div>
        </div>

      </DefaultNode>
      <Options open={ open } handleOpen={ handleModal } close={ handleModal } options={ handleOptions }/>
    </>
  )
}

export default memo(ConditionalNodeComponent)
