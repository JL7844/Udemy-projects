import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
export default function App(){
  const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const [step, setStep] = useState(1);
const [isOpen, setIsOpen] = useState(true);
const handelNextClick = () => {
  if (step < 3)setStep(s => s + 1);
  
};
const handlePreviousClick = () => {
  if(step > 1)setStep(s => s - 1);
};
const isOpenButton = () =>{
  setIsOpen(is => !is);
}; 
return (
  <>
     <button className='close' onClick={isOpenButton}>&times;</button>
      <div>
    {isOpen && (
       <div className='steps'>
    <div className='numbers'>

      <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div>
    </div>
    <div >
      <p className='message'>step {step}: {messages[step-1]}</p>
    </div>
    <div className='buttons'>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handelNextClick}>Next</button>
    </div>
  </div>
    )}
  </div>
  </>
 
 
);
}