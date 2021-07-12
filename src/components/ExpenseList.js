import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext'

export const ExpenseList = () => {
  const list =useContext(GlobalContext);

    return (
        <>
        <h3>History</h3>
      <ul  className="list">
      {

        list.transaction.map(transaction=>{
          let sign=transaction.amount > 0 ? '+' : '-';
          let classSign=transaction.amount > 0 ? 'plus' : 'minus';
          return   <li className={classSign}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn"  onClick={()=>list.deleteAction(transaction.id)}>x</button>
        </li> 
        })
      }
    

      </ul>
        </>
    )
}
