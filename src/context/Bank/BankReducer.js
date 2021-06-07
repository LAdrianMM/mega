import { SAVE_BANK_FORM } from '../types'

const BankReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case SAVE_BANK_FORM:
      return {
        ...state,
        name: payload.bankName,
        number: payload.accountNumber,
        type: payload.accountType,
      }
    default: 
      return state
  }
}

export default BankReducer