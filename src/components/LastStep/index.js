import { Button, makeStyles, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import BankContext from '../../context/Bank/BankContext'
import ReceiverContext from '../../context/Receiver/ReceiverContext'
import SenderContext from '../../context/Sender/SenderContext'

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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
  }
}))

const LastStep = ({ setActiveStep }) => {
  const BANK = useContext(BankContext)
  const SENDER = useContext(SenderContext)
  const RECEIVER = useContext(ReceiverContext)

  console.log(BANK.state)
  console.log(SENDER.state)
  console.log(RECEIVER.state)
  
  const classes = styles()
  
  const sendWhatsapp = () => {
    const phone = '56920686539'
    let url = `https://api.whatsapp.com/send?phone=${phone}&text=
        *_MEGA ENVÍOS_*%0A
        *¿Quién envía?*%0A%0A
        *Nombre*%0A
        ${SENDER.state.name}%0A
        *Número de documento*%0A
        ${SENDER.state.document}%0A
        *Número de telefono*%0A
        ${SENDER.state.phone}%0A
        *Dirección*%0A
        ${SENDER.state.address}%0A

        *¿Quién Recibe?*%0A
        *Nombre*%0A
        ${RECEIVER.state.name}%0A
        *Número de documento*%0A
        ${RECEIVER.state.document}%0A
        *Número de telefono*%0A
        ${RECEIVER.state.phone}%0A
        *Fecha de Nacimiento*%0A
        ${RECEIVER.state.birthday}%0A
        *Dirección*%0A
        ${RECEIVER.state.address}%0A
        *Ciudad*%0A
        ${RECEIVER.state.city}%0A

        *Información del Banco*%0A
        *Nombre del Banco*%0A
        ${BANK.state.name}%0A
        *Número de Cuenta*%0A
        ${BANK.state.number}%0A
        *Tipo de Cuenta*%0A
        ${BANK.state.type}%0A`
    window.open(url)
  }
  const handleSend = () => {
    sendWhatsapp()
    setActiveStep(0);
  };


  return (
    <div className={classes.root}>
      <Typography className={classes.instructions}>
        All steps completed - you&apos;re finished
      </Typography>
      <Button onClick={handleSend} className={classes.button}>
        Enviar al Whatsapp
      </Button>
    </div>
  )
}

export default LastStep
