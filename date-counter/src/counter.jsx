import React, {useState} from 'react'
function Counter(){
 const [step, setStep] = useState(0);
  const [count, setCount]= useState("");
  const date = new Date('jun 21 2027');
  date.setDate(date.getDate() + count);
  
const handleInclineCount = () => {
 
  setCount(c => c + step);
};
const handleDeclineCount = () => {

  setCount(c => c - step);
};

const handleChange = (e) => {
  setStep(Number(e.target.value));
}
const handleInput = (e) => {
  setCount(Number(e.target.value));
}
  return(
    <>
    <div className='container'>
      <div>
        <input value={step} type="range" min={0} max={10} onChange={handleChange}/>
        <span>{step}</span>
      </div>
      
        <div>
        <button onClick={handleDeclineCount}>
                -
        </button>
          <input className='inputBox' type="number" placeholder='0' value={count} onChange={handleInput} />
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