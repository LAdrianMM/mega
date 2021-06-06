import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Stepper, Step, StepLabel, StepConnector, Button, Typography } from '@material-ui/core';
import { Check, Settings as SettingsIcon, GroupAdd as GroupAddIcon, VideoLabel as VideoLabelIcon } from '@material-ui/icons';
import { PersonalForm, ReceiverForm, BankForm} from '../index';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg, rgb(27,188,92) 0%, rgb(27,188,172) 50%,rgb(27,124,188) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg, rgb(27,188,92) 0%, rgb(27,188,172) 50%,rgb(27,124,188) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(27,188,92) 0%, rgb(27,188,172) 50%, rgb(27,124,188) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(27,188,92) 0%, rgb(27,188,172) 50%, rgb(27,124,188) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#00bb2d',

    '&:hover': {
      backgroundColor: '#25D366',
      boxShadow: 'none',
      border: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#DCF8C6',
      border: 'none'
    }
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

function getSteps() {
  return ['Tus datos', '¿Quién recibe?', 'Información del banco'];
}

function getStepContent(activeStep, setActiveStep, steps) {
  switch (activeStep) {
    case 0:
      return <PersonalForm activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} />
    case 1:
      return <ReceiverForm activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} />
    case 2:
      return <BankForm activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} />
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const sendWhatsapp = () => {
    let url = `https://api.whatsapp.com/send?phone=56920686539&text=
		*_MEGA ENVÍOS_* `
    window.open(url)
  }

  const handleReset = () => {
    sendWhatsapp()
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button color='success' onClick={handleReset} className={classes.button}>
              Enviar al Whatsapp
            </Button>
          </div>
        ) : (
          <div>
            <div>
              {
                getStepContent(activeStep, setActiveStep, steps)
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
