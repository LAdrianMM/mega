import { SAVE_RECEIVER_FORM } from '../types'

const ReceiverReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case SAVE_RECEIVER_FORM:
      return {
        ...state,
        name: payload.name,
        document: payload.document,
        birthday: payload.birthday,
        phone: payload.phone,
        address: payload.address,
        city: payload.city
      }
    default: 
      return state
  }
}

export default ReceiverReducer