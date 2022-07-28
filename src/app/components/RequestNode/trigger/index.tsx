import React, { useState } from "react";
import { Node } from "react-flow-renderer";
import { Button } from "@mui/material";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import overrideCSS from "./overrideCSS";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../../../store/";
import { addRequestNode } from "../../../store/slices/nodes";

const NodeRequestTrigger = () => {
  const dispatch = useAppDispatch();
  const [node, setNode] = useState<Node[]>([]);

  const handleNode = () => {
    const RequestNodeType = {
      id: uuid(),
      type: "RequestNodeType",
      data: {
        label: "Request",
        fields: {
          name: "",
          url: "",
          method: "",
          token: "",
          headers: "",
          body: "",
        },
      },
      position: { x: Math.random() * 9, y: Math.random() * 9 },
    };
    setNode((prevState) => [RequestNodeType]);
    dispatch(addRequestNode(node));
  };
  return (
    <Button
      variant="outlined"
      endIcon={<SyncAltOutlinedIcon />}
      sx={overrideCSS.button}
      onClick={handleNode}
    >
      Request
    </Button>
  );
};

export default NodeRequestTrigger;
