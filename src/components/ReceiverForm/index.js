import { makeStyles, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { useContext } from 'react';
import ReceiverContext from '../../context/Receiver/ReceiverContext';
import { ButtonsStepper } from '../index';
import { validate } from './validate'

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
    textAlign: 'center'
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
  const { state, saveReceiverForm } = useContext(ReceiverContext)
  const classes = useStyles()
  
  const formik = useFormik({
    initialValues: {
      name: state.name,
      document: state.document,
      birthday: state.birthday,
      phone: state.phone,
      address: state.address,
      city: state.city
    },
    validate,
    onSubmit: values => {
      saveReceiverForm(values)
    }
  })

  return (
    <div>
      <Typography className={classes.instructions}>Datos de quien recibe</Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField
          error={formik.touched.name && formik.errors.name ? true : false}
          helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
          onChange={formik.handleChange} 
          value={formik.values.name}
          onBlur={formik.handleBlur} 
          className={classes.fieldForm} 
          id='name'
          name='name' 
          label="Nombre Completo" 
          variant="outlined" 
        />
        <TextField 
          error={formik.touched.document && formik.errors.document ? true : false}
          helperText={formik.touched.document && formik.errors.document ? formik.errors.document : ''}
          onChange={formik.handleChange}  
          value={formik.values.document}
          onBlur={formik.handleBlur} 
          className={classes.fieldForm} 
          id='document'
          name='document' 
          label="Documento de Identidad"
          variant="outlined" 
        />
        <TextField 
          error={formik.touched.birthday && formik.errors.birthday ? true : false}
          helperText={formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday : ''}
          onChange={formik.handleChange}  
          value={formik.values.birthday}
          onBlur={formik.handleBlur} 
          className={classes.fieldForm} 
          id='birthday'
          name='birthday' 
          label="Fecha de Nacimiento" 
          placeholder='dd/MM/yyyy' 
          variant="outlined" 
        />
        <TextField 
          error={formik.touched.phone && formik.errors.phone ? true : false}
          helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
          onChange={formik.handleChange}  
          value={formik.values.phone}
          onBlur={formik.handleBlur} 
          className={classes.fieldForm} 
          id='phone'
          name='phone' 
          label="Número de Telefono" 
          variant="outlined" 
        />
        <TextField 
          error={formik.touched.address && formik.errors.address ? true : false}
          helperText={formik.touched.address && formik.errors.address ? formik.errors.address : ''}
          onChange={formik.handleChange}  
          value={formik.values.address}
          onBlur={formik.handleBlur} 
          className={classes.fieldForm} 
          id='address'
          name='address' 
          label="Dirección" 
          variant="outlined" 
        />
        <TextField 
          error={formik.touched.city && formik.errors.city ? true : false}
          helperText={formik.touched.city && formik.errors.city ? formik.errors.city : ''}
          onChange={formik.handleChange}  
          value={formik.values.city}
          onBlur={formik.handleBlur} 
          className={classes.fieldForm}
          id='city'
          name='city'
          label="Ciudad" 
          variant="outlined" 
        />
      </form>
      <ButtonsStepper
        disabled={(!formik.values.name 
          || !formik.values.document 
          || !formik.values.phone 
          || !formik.values.address 
          || !formik.values.birthday
          || !formik.values.city
          || formik.errors.name 
          || formik.errors.document 
          || formik.errors.phone 
          || formik.errors.address
          || formik.errors.birthday
          || formik.errors.city) 
          ? true 
          : false
        }
        onClick={formik.handleSubmit}
        type='submit'
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={steps}
          /> 
    </div>
  )
}

export default ReceiverForm
