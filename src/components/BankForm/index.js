import { FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useContext } from 'react'
import BankContext from '../../context/Bank/BankContext';
import { ButtonsStepper } from '../index';
import { validate } from './validateForm'

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
    maxWidth: '678px',
  },
  select: {
    display: 'flex',
    textAlign: 'left'
  }
}));


const BankForm = ({ activeStep, setActiveStep, steps }) => {
  const { state, saveBankForm } = useContext(BankContext)
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      bankName: state.name,
      accountNumber: state.number,
      accountType: state.type
    },
    validate,
    onSubmit: values => {
      saveBankForm(values)
    }
  })

  return (
    <div>
      <Typography className={classes.instructions}>Datos del Banco</Typography>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <FormControl
          variant="outlined" 
          className={classes.fieldForm}
          error={formik.touched.bankName && formik.errors.bankName ? true : false}
          >
          <InputLabel id="demo-simple-select-outlined-label">Nombre del Banco</InputLabel>
          <Select
            onBlur={formik.handleBlur} 
            labelId="demo-simple-select-outlined-label"
            id="bankName"
            name="bankName"
            label="Nombre del Banco"
            value={formik.values.bankName}
            onChange={formik.handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem> 
            <MenuItem value='Bancolombia'>Bancolombia</MenuItem>
            <MenuItem value='Davivienda'>Davivienda</MenuItem>
            <MenuItem value='BBVA'>BBVA</MenuItem>
          </Select>
          {formik.touched.bankName && formik.errors.bankName ? <FormHelperText>{formik.errors.bankName}</FormHelperText> : ''}
        </FormControl>
        <TextField 
          error={formik.touched.accountNumber && formik.errors.accountNumber ? true : false}
          helperText={formik.touched.accountNumber && formik.errors.accountNumber ? formik.errors.accountNumber : ''}
          onBlur={formik.handleBlur} 
          id='accountNumber'
          name='accountNumber'
          value={formik.values.accountNumber}
          onChange={formik.handleChange}
          className={classes.fieldForm} 
          label="Número de cuenta" 
          variant="outlined" 
        />
        <FormControl
          variant="outlined" 
          className={classes.fieldForm}
          error={formik.touched.accountType && formik.errors.accountType ? true : false}
          >
          <InputLabel id="demo-simple-select-outlined-label">Tipo de Cuenta</InputLabel>
          <Select   
            onBlur={formik.handleBlur} 
            labelId="demo-simple-select-outlined-label"
            id="accountType"
            name='accountType'
            label="Tipo de Cuenta"
            value={formik.values.accountType}
            onChange={formik.handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem> 
            <MenuItem value='Corriente'>Corriente</MenuItem>
            <MenuItem value='Ahorros'>Ahorros</MenuItem>
          </Select>
          {formik.touched.accountType && formik.errors.accountType ? <FormHelperText>{formik.errors.accountType}</FormHelperText> : ''}
        </FormControl>
      </form>
      <ButtonsStepper
        disabled={(!formik.values.bankName 
          || !formik.values.accountNumber 
          || !formik.values.accountType
          || formik.errors.bankName 
          || formik.errors.accountNumber 
          || formik.errors.accountType) 
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

export default BankForm
