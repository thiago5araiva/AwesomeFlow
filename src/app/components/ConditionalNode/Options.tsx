import React, { useState } from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material"

const ConditionalNodeOptions = ({ open, handleClose }: any): JSX.Element => {
  const [name, setName] = useState<string>("Conditional")
  const [conditions, setConditions] = useState<string>("=")
  const [param1, setParam1] = useState<string>("")
  const [param2, setParam2] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = event.target.name as string
    const value = event.target.value as string
    type === "name" && setName(value)
    type === "param1" && setParam1(value)
    type === "param2" && setParam2(value)
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setConditions(event.target.value as string)
  }

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
            <Typography>You can add conditions to your flow </Typography>
            <Grid container sx={{ justifyContent: "space-between" }}>
              <Grid item xs={3}>
                <TextField
                  name="param1"
                  value={param1}
                  fullWidth
                  id="standard-basic"
                  label="Param 1*"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Condition
                  </InputLabel>
                  <Select
                    name="conditions"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Conditions"
                    onChange={handleSelectChange}
                    value={conditions}
                  >
                    <MenuItem value="=">=</MenuItem>
                    <MenuItem value="!=">!=</MenuItem>
                    <MenuItem value=">">
                      <span>&#62;</span>
                    </MenuItem>
                    <MenuItem value=">=">
                      <span>&#62;=</span>
                    </MenuItem>
                    <MenuItem value="exists">EXISTS</MenuItem>
                    <MenuItem value="not-exists">NOT EXISTS</MenuItem>
                    <MenuItem value="contains">CONTAINS</MenuItem>
                    <MenuItem value="not-contains">NOT CONTAINS</MenuItem>
                    <MenuItem value="<">
                      <span>&#60;</span>
                    </MenuItem>
                    <MenuItem value="<=">
                      <span>&#60;=</span>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  name="param2"
                  value={param2}
                  fullWidth
                  id="standard-basic"
                  label="Param 2 *"
                  variant="standard"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

const styles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  "&:focus-visible": {
    outline: "none",
  },
}

export default ConditionalNodeOptions
