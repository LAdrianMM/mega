import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  root: {
    textAlign: 'center'
  }
}))

const ButtonsStepper = ({ activeStep, setActiveStep, steps, type, onClick, disabled }) => {
  const classes = styles()

  const handleNext = () => {
    onClick()
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
        Volver
      </Button>
      <Button
        disabled={disabled}
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
        type={type}
      >
        {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
      </Button>
    </div>
  )
}

export default ButtonsStepper
