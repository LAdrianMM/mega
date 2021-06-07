export const validate = values => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Este campo es obligatorio'
  } else if(values.name.indexOf(' ') <= 0) {
    errors.name = 'Debe contener al menos un apellido'
  }

  if(!values.document) {
    errors.document = 'Este campo es obligatorio'
  }

  if(!values.phone) {
    errors.phone = 'Este campo es obligatorio'
  }

  if(!values.address) {
    errors.address = 'Este campo es obligatorio'
  }

  return errors
}