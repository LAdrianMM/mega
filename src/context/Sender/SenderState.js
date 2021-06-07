import { useReducer } from 'react'
import SenderContext from './SenderContext'
import SenderReducer from './SenderReducer'

const SenderState = ({ children }) => {
  const initialState = {
    name: '',
    document: '',
    phone: '',
    address: ''
  }

  const [state, dispatch] = useReducer(SenderReducer, initialState)

  const saveSenderForm = (values) => {
    dispatch({
      type: 'SAVE_SENDER_FORM',
      payload: values
    })
  }

  return (
    <SenderContext.Provider value={{
      state,
      saveSenderForm
    }}>
      {
        children
      }
    </SenderContext.Provider>
  )
}

export default SenderState