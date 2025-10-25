import React, {useState} from 'react'
import ReactDOM from 'react'
export default function App(){
  const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
console.log(initialItems);

return(
  <>
   <Header />
  <Add itemsObj = {initialItems}/>
  <Display itemsObj = {initialItems}/>
  <Clear />
  
  
  </>
 
);
}
function Header(){
return(
  <div className="header-container">
     
     <h1 ><img src="./beach-tree.jpg" alt="" className="img" /> FAR AWAY <img src="./bag.jpg" alt="" className="img" /></h1>
     
  </div>
);
}
function Add({itemsObj}){
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
 const handleAdd = (e) => {
      e.preventDefault();
      setDescription("");
      setQuantity("");
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }
  
const Ids = itemsObj.map(item => item.id);

  return(
    <form className="add-form" onSubmit={handleAdd}>
    <p>what do you need for your 😍 trip</p>
    <select value={quantity} onChange={handleQuantityChange} >
      {Array.from({ length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num} >{num}</option>)}
    </select>
    
    <input type="text" placeholder="item..." value={description} key={Ids} onChange={handleDescription}/> 
    <button type='submit'>Add</button>
    </form>
    
  );
}
function Display({itemsObj}){
 return(
 <div className="list">
  <ul>
    {itemsObj.map(item => 
       <Item item={item}/>
    )}
  </ul>
  
    
<select>
  <option value=""></option>
<option value=""></option>
<option value=""></option>
</select>

<button>Clear List</button>
 </div>
   
  
 ); 
}
function Item({item, quantity}){
  return(
    <li className="item-li">
      <span style={item.packed ? {textDecoration : "Line-through"} : {}}>{quantity}{item.description}</span>
      <button>❌</button>
      </li>
  );
  
}
function Clear(){
  return(
    <footer className="stats">
       <p>start adding some items to your packing list 🏅</p>

    </footer>
   
  );
  
}


