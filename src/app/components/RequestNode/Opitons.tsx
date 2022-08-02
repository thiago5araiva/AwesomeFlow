import React, { useState } from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, } from "@mui/material"


type ValueProps = {
  [key: string]: string
}

const RequestNodeOptions = ( { open, handleClose }: any ): JSX.Element => {
  const [ state, stateSet ] = useState<ValueProps>({
    method: 'GET',
    name: 'Request',
    url: 'https://',
    token: '',
    headers: '',
    body: ''
  })


  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const type = event.target.name as string
    const value = event.target.value as string
    stateSet(( prevState: ValueProps ) => {
      return ({ ...prevState, [type]: value })
    })
  }

  const handleSelectChange = ( event: SelectChangeEvent ) => {
    stateSet(( prevState: ValueProps ) => {
      const value = event.target.value as string
      return ({ ...prevState, method: value })
    })
  }
  const handleSave = () => {
    const globalState = {}
    return handleClose()
  }
  return (
    <div>
      <Modal
        open={ open }
        onClose={ handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ styles }>
          <Stack spacing={ 3 }>
            <TextField
              name="name"
              value={ state.value }
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={ handleChange }
            />
            <TextField
              name="url"
              value={ state.url }
              fullWidth
              id="standard-basic"
              label="URL"
              variant="standard"
              onChange={ handleChange }
            />
            <TextField
              name="token"
              value={ state.token }
              fullWidth
              id="standard-basic"
              label="Token"
              variant="standard"
              onChange={ handleChange }
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Method</InputLabel>
              <Select
                name="select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ state.method }
                label="Method"
                onChange={ handleSelectChange }
              >
                <MenuItem value="GET">GET</MenuItem>
                <MenuItem value="POST">POST</MenuItem>
                <MenuItem value="PUT">PUT</MenuItem>
                <MenuItem value="DELETE">DELETE</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="headers"
              value={ state.headers }
              id="outlined-multiline-flexible"
              label="Headers"
              multiline
              fullWidth
              maxRows={ 6 }
              onChange={ handleChange }
            />
            <TextField
              name="body"
              value={ state.body }
              id="outlined-multiline-flexible"
              label="Body"
              multiline
              fullWidth
              maxRows={ 6 }
              onChange={ handleChange }
            />
            <Button variant="contained" fullWidth onClick={ handleSave }> Salvar</Button>
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
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  "&:focus-visible": {
    outline: "none",
  },
}

export default RequestNodeOptions
