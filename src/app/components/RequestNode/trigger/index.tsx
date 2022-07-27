import React from "react";

import { Button } from "@mui/material";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import overrideCSS from "./overrideCSS";

import { useAppDispatch } from "../../../store/";
import { addNode } from "../../../store/slices/nodes";

const BTCQueryComponent = () => {
  const dispatch = useAppDispatch();

  const RequestNodeType = {
    id: "1",
    type: "RequestNodeType",
    data: { label: "Node 1" },
    position: { x: 5, y: 5 },
  };
  return (
    <Button
      variant="outlined"
      endIcon={<SyncAltOutlinedIcon />}
      sx={overrideCSS.button}
      onClick={() => dispatch(addNode(RequestNodeType))}
    >
      Request
    </Button>
  );
};

export default BTCQueryComponent;
