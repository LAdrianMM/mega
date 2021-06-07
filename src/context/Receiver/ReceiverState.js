import { useReducer } from 'react'
import ReceiverContext from './ReceiverContext'
import ReceiverReducer from './ReceiverReducer'

const ReceiverState = ({ children }) => {
  const initialState = {
    name: '',
    document: '',
    birthday: '',
    phone: '',
    address: '',
    city: '' 
  }

  const [state, dispatch] = useReducer(ReceiverReducer, initialState)

  const saveReceiverForm = (values) => {
    dispatch({
      type: 'SAVE_RECEIVER_FORM',
      payload: values
    })
  }

  return (
    <ReceiverContext.Provider value={{
      state,
      saveReceiverForm
    }}>
      {
        children
      }
    </ReceiverContext.Provider>
  )
}

export default ReceiverState