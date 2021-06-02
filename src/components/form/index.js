import React from 'react'
import { Col, Form, Button } from 'react-bootstrap'

const FormComponent = () => {
  const onSubmitForm = () => {
    // const { receptor } = data
    
    let url = `https://api.whatsapp.com/send?phone=56920686539&text=
      *Mega*%0A
      `
      // *Reservas*%0A%0A
      // *¿A quién enviamos?*%0A
      // ${receptor}%0A
      // *Indica la fecha de tu reserva*%0A
      // ${fecha}%0A
      // *Indica la hora de tu reserva*%0A
      // ${hora}%0A
      // *Empleado de preferencia*%0A
      // ${empleado}%0A
      // *¿Cuál es el servicio que se desea realizar?*%0A
      // ${servicio}

      window.open(url)
  }

  return (
    <Form>
      <Form.Row>    
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>
    
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
    
      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
    
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
    
      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    
      <Button onClick={onSubmitForm} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent
