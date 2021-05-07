import './App.css';
import React from 'react';
//import React,{Component} from 'react';
import greet from './components/greet';
//import {greet} from './components/greet';
import welcome from './components/welcome';

/*
 * dont know why greet and welcome tags are not working
 */
function App() {
  return (
    <div className="App">
      <greet/>
      <welcome/>
      <h1>Hello Sukarna Jana</h1><hr/>  
    </div>
  );
}

export default App;
