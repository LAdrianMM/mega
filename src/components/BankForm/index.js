import { FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  form: {
    marginBottom: 15,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  fieldForm: {
    marginBottom: 25,
    width: '90%',
    maxWidth: '678px',
  },
  select: {
    display: 'flex',
    textAlign: 'left'
  }
}));


const BankForm = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.instructions}>Datos del Banco</Typography>
      <form className={classes.form}>
        <FormControl variant="outlined" className={classes.fieldForm}>
          <InputLabel id="demo-simple-select-outlined-label">Nombre del Banco</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Nombre del Banco"
            className={classes.select}
          >
            <MenuItem value='Bancolombia'>Bancolombia</MenuItem>
            <MenuItem value='Davivienda'>Davivienda</MenuItem>
            <MenuItem value='BBVA'>BBVA</MenuItem>
          </Select>
        </FormControl>
        <TextField className={classes.fieldForm} label="Número de cuenta" variant="outlined" />
        <TextField className={classes.fieldForm} label="Tipo de cuenta" variant="outlined" />
      </form>
    </div>
  )
}

export default BankForm
