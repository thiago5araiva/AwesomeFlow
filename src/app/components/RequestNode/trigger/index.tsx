import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import { Button } from '@mui/material';
import { FC } from 'react';
import { Node } from 'react-flow-renderer';
import overrideCSS from './overrideCSS';

interface INodeTrigger {
  handleNode(node: Node): void;
  node: Node;
}

const NodeTrigger: FC<INodeTrigger> = ({ handleNode, node }) => {
  return (
    <Button
      variant="outlined"
      endIcon={<SyncAltOutlinedIcon />}
      sx={overrideCSS.button}
      onClick={() => handleNode(node)}
    >
      {node.data.label}
    </Button>
  );
};

export default NodeTrigger;
