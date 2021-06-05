import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}))

const ButtonsStepper = ({ activeStep, setActiveStep, steps }) => {
  const classes = styles()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
      >
        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </div>
  )
}

export default ButtonsStepper
