import { makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
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


const ReceiverForm = ({ activeStep, setActiveStep, steps }) => {
  const classes = useStyles()
  const [dataReceiver, setDataReceiver] = useState({
    name: '',
    document: '',
    birthday: '',
    phone: '',
    direction: '',
    city: ''
  })

  const handleInputChange = (e) => {
    setDataReceiver({
        ...dataReceiver,
        [e.target.name] : e.target.value
    })
}

  return (
    <div>
      <Typography className={classes.instructions}>Datos de quien recibe</Typography>
      <form className={classes.form}>
        <TextField onChange={e => handleInputChange(e)} className={classes.fieldForm} name='name' label="Nombre Completo" variant="outlined" />
        <TextField onChange={e => handleInputChange(e)}  className={classes.fieldForm} name='document' label="Documento de Identidad" variant="outlined" />
        <TextField onChange={e => handleInputChange(e)}  className={classes.fieldForm} name='birthday' label="Fecha de Nacimiento" placeholder='dd/MM/yyyy' variant="outlined" />
        <TextField onChange={e => handleInputChange(e)}  className={classes.fieldForm} name='phone' label="Número de Telefono" variant="outlined" />
        <TextField onChange={e => handleInputChange(e)}  className={classes.fieldForm} name='direction' label="Dirección" variant="outlined" />
        <TextField onChange={e => handleInputChange(e)}  className={classes.fieldForm} name='city' label="Ciudad" variant="outlined" />
      </form>
      <ButtonsStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={steps}
          /> 
    </div>
  )
}

export default ReceiverForm
