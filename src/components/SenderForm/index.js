import { makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { ButtonsStepper } from '../index';
import { validate } from './validateForm'
import SenderContext from '../../context/Sender/SenderContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
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
    marginBottom: theme.spacing(3),
    width: '90%',
    maxWidth: '678px'
  },
}));


const PersonalForm = ({ setActiveStep, steps, activeStep }) => {
  const { state, saveSenderForm } = useContext(SenderContext)
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      name: state.name,
      document: state.document,
      phone: state.phone,
      address: state.address,
    },
    validate,
    onSubmit: values => {
      saveSenderForm(values)
    }
  })

  return (
    <div className={classes.root}>
      <Typography className={classes.instructions}>Tus datos</Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField 
          error={formik.touched.name && formik.errors.name ? true : false}
          helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
          variant="outlined" 
          id='name'
          name='name' 
          className={classes.fieldForm} 
          label="Nombre y Apellido" 
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
        />
        <TextField 
          error={formik.touched.document && formik.errors.document ? true : false}
          helperText={formik.touched.document && formik.errors.document ? formik.errors.phone : ''}
          variant="outlined" 
          name='document'
          id='document' 
          className={classes.fieldForm} 
          label="Documento de Identidad" 
          value={formik.values.document}
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
        />
        <TextField 
          error={formik.touched.phone && formik.errors.phone ? true : false}
          helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
          type='number'
          onChange={formik.handleChange} 
          value={formik.values.phone}
          id='phone'
          name='phone' 
          className={classes.fieldForm} 
          label="Número de Telefono" 
          variant="outlined"
          onBlur={formik.handleBlur} 
        />
        <TextField 
          error={formik.touched.address && formik.errors.address ? true : false}
          helperText={formik.touched.address && formik.errors.address ? formik.errors.address : ''}
          onChange={formik.handleChange} 
          value={formik.values.address}
          id='address'
          name='address' 
          className={classes.fieldForm} 
          label="Dirección" 
          variant="outlined" 
          onBlur={formik.handleBlur} 
        />
      </form>
      <ButtonsStepper
        disabled={(!formik.values.name 
          || !formik.values.document 
          || !formik.values.phone 
          || !formik.values.address 
          || formik.errors.name 
          || formik.errors.document 
          || formik.errors.phone 
          || formik.errors.address) 
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

export default PersonalForm
