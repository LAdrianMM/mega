import { useReducer } from 'react'
import BankContext from './BankContext'
import BankReducer from './BankReducer'

const BankState = ({ children }) => {
  const initialState = {
    name: '',
    number: '',
    type: '',
  }

  const [state, dispatch] = useReducer(BankReducer, initialState)

  const saveBankForm = (values) => {
    dispatch({
      type: 'SAVE_BANK_FORM',
      payload: values
    })
  }

  return (
    <BankContext.Provider value={{
      state,
      saveBankForm
    }}>
      {
        children
      }
    </BankContext.Provider>
  )
}

export default BankState