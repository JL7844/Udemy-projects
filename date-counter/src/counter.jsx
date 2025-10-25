import React, {useState} from 'react'
function Counter(){
 const [step, setStep] = useState(1);
  const [count, setCount]= useState(0);
  const date = new Date('jun 21 2027');
  date.setDate(date.getDate() + count);
  
const handleInclineCount = () => {
 
  setCount(c => c + step);
};
const handleDeclineCount = () => {

  setCount(c => c - step);
};
const handleInclineStep = () => {
  setStep(s => s + 1);

};
const handleDeclineStep = () => {
  setStep(s => s - 1);
};
  return(
    <>
    <div className='container'>
      <div>
        <button onClick={handleDeclineStep}>
               -
        </button>
            <p className='para'>
              step: {step} </p>
        <button onClick={handleInclineStep}>
                +
        </button>
      </div>
        <div>
        <button onClick={handleDeclineCount}>
                -
        </button>
          <p className='para'>
            count: {count} </p>
        <button onClick={handleInclineCount}>
                +
        </button>
        </div>
        <span>{count === 0 ? "today is" : count > 0 ? `${count} days from today is`: `${Math.abs(count)} days ago was`} {date.toDateString()} </span>
    </div>
   
     
    </>
   
  );
}
export default Counter