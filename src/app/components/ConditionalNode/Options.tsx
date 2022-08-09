import React, { Fragment, useState } from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import {
  Button,
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

type ParamsProps = {
  param1: string,
  condition: string,
  param2: string
}

const ConditionalNodeOptions = ( { open, close, options }: any ): JSX.Element => {
  const [ name, setName ] = useState<string>("Condicional")
  const [ data, dataSet ] = useState<ParamsProps[]>([ {
    param1: '',
    condition: '',
    param2: ''
  } ])

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement>, position: number ) => {
    const type = event.target.name as string
    const value = event.target.value as string
    type === "name" && setName(value)
    const mappedState = data.map(( item: any, index: any ) => (index === position ? {
        ...item,
        [type]: event.target.value as string
      } : item)
    )
    dataSet(mappedState)

  }
  const handleSelectChange = ( event: SelectChangeEvent, position: number ) => {
    const mappedState = data.map(( item: any, index: any ) => (index === position ? {
        ...item,
        condition: event.target.value as string
      } : item)
    )
    dataSet(mappedState)
  }
  const handleSave = (): void => {
    const globalState = {
      name,
      data
    }
    options(globalState)
    return close()
  }
  const handleAdd = () => {
    return dataSet(( prevState: ParamsProps[] ) => ([ ...prevState, {
      param1: '',
      condition: '',
      param2: ''
    } ]))
  }
  return (
    <div>
      <Modal
        open={ open }
        onClose={ close }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ styles }>
          <Stack spacing={ 3 }>
            <TextField
              name="name"
              value={ name }
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => handleChange(event, 0) }
            />
            <Typography>Você pode Adicionar suas condições aqui </Typography>
            <Grid rowSpacing={ 2 } container sx={ { justifyContent: "space-between" } }>
              { data.map(( param: any, index: number ) => (
                <Fragment key={ index }>
                  <Grid item xs={ 3 } key={ index }>
                    <TextField
                      name="param1"
                      value={ param.param1 }
                      fullWidth
                      id="standard-basic"
                      label="Param 1*"
                      variant="standard"
                      onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => handleChange(event, index) }
                    />
                  </Grid>
                  <Grid item xs={ 4 }>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Condition
                      </InputLabel>
                      <Select
                        name="conditions"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Conditions"
                        onChange={ ( event: SelectChangeEvent ) => handleSelectChange(event, index) }
                        value={ param.condition }
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
                  <Grid item xs={ 3 }>
                    <TextField
                      name="param2"
                      value={ param.param2 }
                      fullWidth
                      id="standard-basic"
                      label="Param 2 *"
                      variant="standard"
                      onChange={ ( event: React.ChangeEvent<HTMLInputElement> ) => handleChange(event, index) }
                    />
                  </Grid>
                </Fragment>
              )) }
            </Grid>
            <Grid container sx={ { justifyContent: 'space-between' } }>
              <Grid item>
                <Button variant="text" onClick={ handleAdd }> Adicionar</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" fullWidth onClick={ handleSave }> Salvar</Button>
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
