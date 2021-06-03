import { makeStyles, TextField, Typography } from '@material-ui/core';
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
    maxWidth: '678px'
  }
}));


const PersonalForm = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.instructions}>Tus datos</Typography>
      <form className={classes.form}>
        <TextField className={classes.fieldForm} label="Nombre y Apellido" variant="outlined" />
        <TextField className={classes.fieldForm} label="Documento de Identidad" variant="outlined" />
        <TextField className={classes.fieldForm} label="Número de Telefono" variant="outlined" />
        <TextField className={classes.fieldForm} label="Dirección" variant="outlined" />
      </form>
    </div>
  )
}

export default PersonalForm
