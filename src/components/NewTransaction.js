import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';


export const NewTransaction = () => {
  const list =useContext(GlobalContext);

  const [Name,setName]=useState('');
  const [Amount,setAmount]=useState(0);
  const  addTranssaction=(e)=>{
    e.preventDefault();
    const transaction={
      id:Math.floor(Math.random()*100000000),
      text:Name,
      amount:parseInt(Amount)
    }
    list.addAction(transaction)
   
  }

    return (
        <>
        <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="Enter text..." value={Name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div  className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  placeholder="Enter amount..." value={Amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <button  className="btn" onClick={addTranssaction} >Add transaction</button>
      </form>
        </>
    )
}
