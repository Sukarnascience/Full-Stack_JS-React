# Full-Stack_JS-React
> Learning Stage Of Full Stack JavaScript
You can use this Repository for your learnig perpose also...

## Installing React 
* hope you have install NODE.JS
* we can install Globaly or Locally 
* we installed globaly 
```npm install -g create-react-app```
> in my case i had to use ```sudo npm install -g create-react-app```
* we will install in a project dir. 
```create-react-app <Folder/project Name>```
* Install : React Developer Tools For Chrome extension
* you will get a package.json file in which help to handel all our packages...
* how to Install new things:
> what this will do is... it will install and update our package.json file
```npm install <package name> --save```
* now we will work with src dir.

# Documentation

* ## Components
in React a components represent a part of the user interface
    * they are reusable
    * components Type:
        1. Functional Component
        2. Class Component

example for Functional Component : \
welcome.js
``` js
function welcome(props){
    return <h1> Hello, {props.name} </h1>;
}
```

example for Class Component : \
greet.js
```js
class welcome extends React.Component(){
    render(){
        return <h1> Hello, {this.props.name} </h1>;
    }
}
```

To use your Component in other file :\ 
App.js
```js
import Greet from './components/greet'; // file location
import Welcome from './components/welcome'; // file location

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}
```

* ## uses of JSX and see different without JSX
  * With JSX
    hello.js
    ```js
    import React from "react";
    const Hello = () => {
        return(
            <p>Hello.. hehee! It's is a JSX function</p>
        );
    }
    export default Hello;
    ```
  * Without JSX
  hellohi.js
  ```js
  import React from "react";
  const Hellohi = () => {
      return React.createElement('div',null,React.createElement('h3',null,"without JSX"))
  }
  export default Hellohi;
  ```
  the 2nd parameter in create elements is for object key value pairs 
  that will be appended to the elements \
  eg: we need id attributes in div tag
  ```js
  return React.createElement('div',{id:"hello"},React.createElement('h3',null,"without JSX"))
  ```
  Output will be: ```<div id="hello"><h3>without JSX</h3></div>```\
  * ### JSX difference
    1. class -> className
    2. for   -> htmlFor
    3. camelCase property nameing convention
      a. onclick -> onClick
      b. tabindex-> tabindex
* ## Use of Props and State
  * ### Props:
    props -> properties is the optional input that your components
    can accept its ... also the components are dianamic...
    > Porps are immutable
    eg: In App.js
    ```js
    import MyPropsFun from '<--path-->';
    // and in app function use the tag
    <MyPropsFun name="Sukarna Jana" age="17+">
      Hii its me the childern
    </MyPropsFun>
    ```
    Now lets make it in suprate file:\
    Using : Function....
    learnProps.js
    ```js
    import React from 'React';
    const MyPropFun = (props) => {
      console.log()
      return(
        <div>
          <h1>Welcome {props.name}</h1>
          <h2>Your Age is :{props.age}</h1>
          {props.childern}
        </div>
      )
    }
    export default MyPropFun;
    ```
    Using : Class....
    learnProps.js
    ```js
    import React,{Component} from 'React';
    class MyPropsFun extends Component{
      render(){
        return(
          <div>
            <h1>Welcome {this.props.name}</h1>
            <h2>Your Age is :{this.props.age}</h1>
            {props.childern}
          </div>
        )
      }
    }
    export default MyPropsFun;
    ```
  * ### State:
    state is managed with in the component and varibles declared in the funcation body
    > its mutable (State can be changed)
    eg: learnstate.js
    ```js
    import React,{Component} from 'React';
    class MyStateFun extends Component{
      constructor(){
        super()
        this.state = {
          message:"Give us a star"
        }
      }
      changeDataOut(){
        this.setState({
          message:"Thanks Your Liking me"
        })
      }
      render(){
        return(
          <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeDataOut()}>Like</button>
          </div>
        )
      }
    }
    export default MyStateFun;
    ```
    and in App.js
    ```js
    import MyStateFun from '<--path-->';
    // and in App function 
    <MyStateFun />
    ```
* ## Use Of setState method:

  to understand a do and dont with state and setState let us see \
  eg : lets check by increment on every click
  ```js
  import React,{Component} from 'react'

  class ClickCount extends Component{
      constructor(){
          super()
          this.state={
              count:0
          }
      }
      increment(){
          this.setState({
              count:this.state.count + 1
          })
      }
      render(){
          return(
              <div>
                  <p>You have clicked this button : {this.state.count}</p>
                  <button onClick={()=>this.increment()}>Click</button>
              </div>
          )
      }
  }
  ```
  * When ever we are going to change the set dont do directly ib a function
    you can change the state when its under constructor to change the state 
    in a function you need to use setState method
  * setState method has 2 parameters 1st is for the object and 2nd is for 
    call back function
  * > if you see console.log of state value it will be the previous state
    So, if you need to execute some code only after the state has been 
    updated then you need to use call back function to apply this
  * let us assume i want to increment by 5 in above example
    ```js
    incrementFive(){
      increment()
      increment()
      increment()
      increment()
      increment()
    }
    ```
    but it is not going to increment 5 times because react render it together 
    so for that...
    ```js
    increment(){
      // if you need multiple parameter then use (pervState,~,~)
      this.setState(prevState=>({
        count:pervState.count+1
      }))
    }
    ```
    So, if you do now then you are going to increment 5 times 
  * ### Summary
    * always make use of setState and never modify the state directly
    * code has will be executed after the state has been updated so Place
      that code in the call back function which is our 2 argument in setState method
    * when you have to update state based on the pervious state value then pass in a 
      function as a 1st argument of setState method which is known as obejct


License Under : [LICENSE](LICENSE)