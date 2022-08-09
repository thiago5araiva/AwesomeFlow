import { Typography } from "@mui/material"
import React, { FC } from "react"
import styles from "./styles.module.css"

type IDefaultNodeProps = {
  label: string
  icon?: React.ReactElement
  size?: "large" | "medium" | "small"
  children?: React.ReactNode
}

const DefaultNodeComponent: FC<IDefaultNodeProps> = ( {
                                                        label,
                                                        children,
                                                        icon,
                                                        size,
                                                      } ) => {
  return (
    <div className={ `${ styles.node } ${ styles[size || "medium"] }` }>
      <div className={ styles.header }>
        <Typography sx={ { fontFamily: "Exo", color: "#fff", fontSize: 14 } }>
          { label }
        </Typography>
        { icon }
      </div>
      { children }
    </div>
  )
}

export default DefaultNodeComponent
