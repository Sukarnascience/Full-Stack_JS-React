import './App.css';
import React from 'react';

import Typical from 'react-typical';

import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Hellohi from './components/hellohi';
import MyPropsFun from './components/learnProps';
import MyStateFun from './components/learnstate';
import ClickCount from './components/incrementCount';
import LearnDestructuring from './components/learndestructuring';
import LearnEventHandler from './components/learneventHandle';
import Eventbindingdata from './components/eventbinding';
import Parents from './components/parents';

//import React,{Component} from 'react';
//import {greet} from './components/greet';

/*
 * dont know why greet and welcome tags are not working
 */

function App() {
  let data = "Hi it's me sukarna jana and great to see you here ;)"
  return (
    <div className="App">
      <h1><code>
        <Typical
          steps={['', 1000, 'Hello Sukarna Jana', 2000]}
          loop={Infinity}
          wrapper="p"
        />
      </code></h1>
      <Typical
          steps={['',2000, data, 2000]}
          loop={Infinity}
          wrapper="p"
        />
      <Greet />
      <Welcome />
      <Hello />
      <Hellohi />
      <MyPropsFun name="Sukarna Jana" age="17+">
        This is Childern Of MyPropsFun Tag
      </MyPropsFun>
      <MyStateFun/>
      <ClickCount/>
      <LearnDestructuring firstName = "sukarna" lastName = "jana"/>
      <LearnEventHandler/>
      <Eventbindingdata/>
      <Parents/>
    </div>
  );
}

export default App;
