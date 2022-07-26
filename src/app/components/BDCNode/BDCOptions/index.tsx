import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextareaAutosize,
  TextField
} from "@mui/material";

export default function BTCOptionsComponent({ open, handleClose  }: any) {
  const [method, setMethod] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMethod(event.target.value as string);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField fullWidth id="standard-basic" label="Name" variant="standard" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Configure sua request
          </Typography>
          <Stack spacing={3}>
            <TextField fullWidth id="standard-basic" label="URL" variant="standard" />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Method</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={method}
                  label="Method"
                  onChange={handleChange}
              >
                <MenuItem value="GET">GET</MenuItem>
                <MenuItem value="POST">POST</MenuItem>
                <MenuItem value="PUT">PUT</MenuItem>
                <MenuItem value="DELETE">DELETE</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth id="standard-basic" label="Token" variant="standard" />
            <Box>
              <InputLabel id="demo-simple-select-label">Headers</InputLabel>
              <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  style={{ marginTop: 12, width: '100%', height: 150 }}
              />
            </Box>
            <Box>
              <InputLabel id="demo-simple-select-label">Body</InputLabel>
              <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  style={{ marginTop: 12,width: '100%', height: 150 }}
              />
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  "&:focus-visible": {
    outline: 'none'
  },
};
