//import React from 'react'
import React, { useState } from 'react';


export const InputCompo = () => {

  const [inputValue, setInputValue] = useState('');

  const inputcambio = (event) => {
    setInputValue(event.target.value); 
  };

  const agregarTarea = () => {
   
    console.log("valorinput",inputValue)
    
  }
  

  return (
    <div id='container-input'>
      <input id='minput' placeholder='Agregar nueva tarea' value = {inputValue} onChange={inputcambio}></input>
      <button id='btn-agregar' onClick={agregarTarea}>+</button>
      
    </div>
  )
}




