import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext'

export const Balance = () => {
  const list =useContext(GlobalContext);
  let amount,total;
  amount=list.transaction.map(transaction=>{ return transaction.amount} )
  total=  amount.reduce((acc,item)=>(acc+=item),0);
    return (
        <>
        <h4>Your Balance</h4>
      <h1 id="balance">${list.transaction.length < 1 ? "0"  : total}</h1>
        </>
    )
}
