import { makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { ButtonsStepper } from '../index';

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


const PersonalForm = ({ setActiveStep, steps, activeStep }) => {
  const classes = useStyles()
  const [dataTransmitter, setDataTransmitter] = useState({
    name: '',
    document: '',
    birthday: '',
    phone: '',
    direction: '',
    city: ''
  })

  const handleInputChange = (e) => {
    setDataTransmitter({
        ...dataTransmitter,
        [e.target.name] : e.target.value
    })
}

  return (
    <div>
      <Typography className={classes.instructions}>Tus datos</Typography>
      <form className={classes.form}>
        <TextField onChange={e => handleInputChange(e)} name='name' className={classes.fieldForm} label="Nombre y Apellido" variant="outlined" />
        <TextField onChange={e => handleInputChange(e)} name='document' className={classes.fieldForm} label="Documento de Identidad" variant="outlined" />
        <TextField onChange={e => handleInputChange(e)} name='phone' className={classes.fieldForm} label="Número de Telefono" variant="outlined" />
        <TextField onChange={e => handleInputChange(e)} name='address' className={classes.fieldForm} label="Dirección" variant="outlined" />
      </form>
      <ButtonsStepper 
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={steps}
          /> 
    </div>
  )
}

export default PersonalForm
