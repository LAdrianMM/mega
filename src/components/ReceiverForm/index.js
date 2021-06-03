import { makeStyles, TextField, Typography } from '@material-ui/core';

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


const ReceiverForm = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.instructions}>Datos de quien recibe</Typography>
      <form className={classes.form}>
        <TextField className={classes.fieldForm} label="Nombre Completo" variant="outlined" />
        <TextField className={classes.fieldForm} label="Documento de Identidad" variant="outlined" />
        <TextField className={classes.fieldForm} label="Fecha de Nacimiento" placeholder='dd/MM/yyyy' variant="outlined" />
        <TextField className={classes.fieldForm} label="Número de Telefono" variant="outlined" />
        <TextField className={classes.fieldForm} label="Dirección" variant="outlined" />
        <TextField className={classes.fieldForm} label="Ciudad" variant="outlined" />
      </form>
    </div>
  )
}

export default ReceiverForm
