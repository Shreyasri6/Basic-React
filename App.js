import React from 'react'
import List from './List'
import classes from './App.module.css'
import { useState } from 'react';
import Form from './Form';
 

const Dummy=[
  {
    id:"1",
    title:"god of small thing",
    summary:"classic",
    author: "Arunditi Roy"
  }
]

const App = () => {
  const[record, setRecord]=useState('Dummy');

  const previousdata=()=>{
    setRecord((previous)=>{
      return[...previous, record]
    })
  }
  return (
    <div className={classes.list}>
      <Form onAdd={previousdata}/>
      <br/>
      <br/>
      <List items={Dummy}/>
      
      
    </div>
  )
}

export default App;
