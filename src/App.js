import './App.css';
import CustomizedSteppers from './components/Stepper';
import BankState from './context/Bank/BankState';
import ReceiverState from './context/Receiver/ReceiverState';
import SenderState from './context/Sender/SenderState';

function App() {
  return (
    <>
      <ReceiverState>
        <SenderState>
          <BankState>
            <CustomizedSteppers />
          </BankState>
        </SenderState>
      </ReceiverState>
    </>
  );
}

export default App;
