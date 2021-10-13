import React, { useState } from 'react';
import { Sender } from './features/sender/Sender';
import { Receiver } from './features/receiver/Receiver';
import { Weight } from './features/weight/Weight';
import { Shipping } from './features/shipping/Shipping';
import { Confirmation } from './features/confirm/Confirm';
import './App.css';

function App() {
  const [step, setStep] = useState(0);  
  const WIZARD_STEPS = [
    <Sender />,
    <Receiver />,
    <Weight />,
    <Shipping />,
    <Confirmation />
  ];  
  const prevNextProps = {
    isNext: step !== WIZARD_STEPS.length - 1,
    isPrev: step !== 0,
    onStepChange: (go = 1) => { setStep(step + go); }
  };
  return (
    <div className="Appzzz container">
      <h1 className="my-5 text-secondary">Shipping Label Maker</h1>
      {WIZARD_STEPS[step]}
      <PrevNext {...prevNextProps} />      
    </div>
  );
}

function PrevNext({ ...props }) {
  const { isNext, isPrev, onStepChange } = props;
  return <div className="my-5">
      <div className="btn-group">
          <button
              className="btn btn-outline-primary"
              disabled={!isPrev}
              onClick={() => onStepChange(-1)}>Previous</button>
          <button
              className="btn btn-outline-primary"
              disabled={!isNext}
              onClick={() => onStepChange(1)}>Next</button>
      </div>
  </div>
}

export default App;
