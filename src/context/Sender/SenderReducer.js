import { SAVE_SENDER_FORM } from '../types'

const SenderReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case SAVE_SENDER_FORM:
      return {
        ...state,
        name: payload.name,
        document: payload.document,
        address: payload.address,
        phone: payload.phone
      }
    default: 
      return state
  }
}

export default SenderReducer