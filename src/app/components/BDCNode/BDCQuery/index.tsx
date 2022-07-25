import React, { useReducer } from "react";

import { Button } from "@mui/material";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import overrideCSS from "./overrideCSS";

const BTCQueryComponent = () => {
  const BTCQueryNode = {
    id: "5",
    data: { label: "Consulta BDC" },
    position: { x: 15, y: 15 },
  };

  return (
    <Button
      variant="outlined"
      endIcon={<SyncAltOutlinedIcon />}
      sx={overrideCSS.button}
      onClick={() => {}}
    >
      Consulta BDC
    </Button>
  );
};

export default BTCQueryComponent;
