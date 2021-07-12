import React , {createContext, useContext,useReducer} from 'react'
import {AppReducer} from './AppReducer'

const initialState={

    transactions : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext=createContext(initialState);


export const GlobalProvider = ({children}) => {
    const [state,dispatch]=useReducer(AppReducer,initialState);
    const deleteAction=(id)=>{
        dispatch({type:'DELETE',payload:id})
    }
    const addAction=(transaction)=>{
        dispatch({type:'ADD',payload:transaction})
    }

 

    return (<GlobalContext.Provider value={{
            transaction:state.transactions,
            deleteAction,
            addAction
        }}>
            {children}
        </GlobalContext.Provider>);
}
