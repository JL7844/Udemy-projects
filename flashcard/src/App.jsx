import React, {useState} from 'react'
export default function App(){
 return(
  <FlashCard />
 );
}
 function FlashCard(){
  const [selectedId, setSelectedId] = useState(null);
  const flashcards = [
    { id: 1, question: "What language is React based on?", answer: "JavaScript" },
    { id: 2, question: "What are the building blocks of React apps?", answer: "Components" },
    { id: 3, question: "What is the name of the syntax used to describe UI in React?", answer: "JSX" },
    { id: 4, question: "How to pass data from parent to child component?", answer: "Props" },
    { id: 5, question: "How to give components memory?", answer: "useState Hook" },
    { id: 6, question: "What do we call an input fully synced with state?", answer: "Controlled Element" },
  ];
return(
  <div className='flashCard'>
   {flashcards.map(card => (
    <Flash key={card.id}

    id={card.id}
    question={card.question}
    answer={card.answer}
    isSelected={selectedId === card.id}
    onSelect={setSelectedId}/>
   ))}
  </div>
 
);
}
function Flash({id, question, answer, onSelect, isSelected}){
 const handleSelect = () => {
  onSelect(isSelected ? null : id);
 }
  
  return(
   <div onClick={handleSelect} className={isSelected ? 'answer' : 'question'}>{isSelected ? answer: question}</div>
  );
 
}
