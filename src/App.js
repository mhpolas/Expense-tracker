import React from 'react';
import Navigation from './components/Navigation';
import {Balance} from './components/Balance'
import {IncExp} from './components/IncExp'
import {ExpenseList} from './components/ExpenseList'
import {NewTransaction} from './components/NewTransaction'

import './App.css';

function App() {
  return (
    
    <div>
     <Navigation/>
     <div className="container">
      <Balance/>
      <IncExp/>
      <ExpenseList/>
      <NewTransaction/>

     </div>
    </div>
  
  );
}

export default App;
