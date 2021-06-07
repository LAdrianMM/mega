export const validate = values => {
  const errors = {}

  if(!values.bankName) {
    errors.bankName = 'Este campo es obligatorio'
  }

  if(!values.accountNumber) {
    errors.accountNumber = 'Este campo es obligatorio'
  }

  if(!values.accountType) {
    errors.accountType = 'Este campo es obligatorio'
  }

  return errors
}