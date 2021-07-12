import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

export const IncExp = () => {
  let inc,exp,incTotal,expTotal,balance;
  const list =useContext(GlobalContext);
  balance=list.transaction.map(transaction=>{return transaction.amount});
  incTotal=balance.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0);
  expTotal=balance.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0);

    return (
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">
        
            ${list.transaction.length < 1 ? "0"  :incTotal }</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">${list.transaction.length < 1 ? "0"  :  expTotal}</p>
        </div>
      </div>
    )
}
