import { Button } from "@mui/material"
import { FC } from "react"
import { Node } from "react-flow-renderer"

interface IButtonNodeTrigger {
  handleNode(node: Node): void
  node: Node
}

const ButtonNodeTrigger: FC<IButtonNodeTrigger> = ({ handleNode, node }) => {
  return (
    <Button
      variant="outlined"
      onClick={() => handleNode(node)}
      fullWidth
      sx={{ marginBottom: 2 }}
    >
      {node.data.label}
    </Button>
  )
}

export default ButtonNodeTrigger
