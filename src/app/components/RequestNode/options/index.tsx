import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import styles from "./styles";

const RequestNodeOptions = ({ open, handleClose }: any): JSX.Element => {
  const [method, setMethod] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [headers, setHeaders] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = event.target.name as string;
    const value = event.target.value as string;
    type === "name" && setName(value);
    type === "url" && setUrl(value);
    type === "token" && setToken(value);
    type === "headers" && setHeaders(value);
    type === "body" && setBody(value);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
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
        <Box sx={styles}>
          <Stack spacing={3}>
            <TextField
              name="name"
              value={name}
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              name="url"
              value={url}
              fullWidth
              id="standard-basic"
              label="URL"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              name="token"
              value={token}
              fullWidth
              id="standard-basic"
              label="Token"
              variant="standard"
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Method</InputLabel>
              <Select
                name="select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={method}
                label="Method"
                onChange={handleSelectChange}
              >
                <MenuItem value="GET">GET</MenuItem>
                <MenuItem value="POST">POST</MenuItem>
                <MenuItem value="PUT">PUT</MenuItem>
                <MenuItem value="DELETE">DELETE</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="headers"
              value={headers}
              id="outlined-multiline-flexible"
              label="Headers"
              multiline
              fullWidth
              maxRows={6}
              onChange={handleChange}
            />
            <TextField
              name="body"
              value={body}
              id="outlined-multiline-flexible"
              label="Body"
              multiline
              fullWidth
              maxRows={6}
              onChange={handleChange}
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default RequestNodeOptions;
