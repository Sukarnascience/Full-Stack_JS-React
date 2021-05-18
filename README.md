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
* ## Destructuring props and state
  * Destructuring is an es6 feature thats make its possible to unpack variables
    from arrays and  properties from object into distinct variables
  * in react restructuring props and state improves code readability
  * there are 2 ways that we can use in functional components are:
    1. Structuring in the parameters
      Eg: in App.js import our examble file and type
      ```js 
        <LringStructur name="sj" age=17/>
      ``` 
      and in our example file .js
      ```js
        const LringStructur = ({name,age})=> {
          return(<p>Hello {name} and your age is {age}</p>)
        }
      ```
    2. Destructuring in function body   
      ```js
        const LringStructur = props => {
          const {name,age} = props
          return(<p>Hello {name} and your age is {age}</p>)
        }
      ```
      in Class components
      ```js
      class welcome extends Components {
        render(){
          const {name,age} = this.props
          // its same in state type also 
          const {state1,state2} = this.state
          return(<p>Hello {name} and your age is {age}</p>)
        }
      }
      ```
* ## Event Handling
  * any web application you create sometimes its has user interface...
  * when the user intaractact with your application then the evets are fired\
    eg:
    1. mouse click
    2. mouse over
    3. keypress
    4. change event \
    etc.... many more
  * react events named using camel case
  > ```clickHandler```: is a function
  > ```clickHandler()```: is a function call
  * eg: if we use this :- ```clickHandler()``` on button click function then 
    it's means the function will already is called, and when we click into that 
    button nothing will happen...
    > event handler is a function not a function call
  eg:
  ```js
  class LearnEventHandler extends Component{
    changeDataOut(){
      console.log("event has been handled")
    }
    render(){
      return(<button onClick={this.changeDataOut}>Event Handler</button>)
    }
  }
  ```
* ## Binding Event Handlers
  * reason of binding event handler is purely because of ```this.```
    keyword in js file... it's not because of react
  * eg: eventbind.js\
    by creating a class and using event handler using ```this.```
    keyword will be undefine with in a function
  > you should have better knowledge of ```this.``` keyword use.
  ```js
  class MyStateFun extends Component{
    constructor(){
      super()
      this.state = {
        msg:"Give us a star"
      }
    }
    changeDataOut(){
      this.setState({
        msg:"Thanks Your for Liking me"
      })
    }
    render(){
      return(
        <div>
          <p>{this.state.msg}</p>
          <button onClick={this.changeDataOut}>Like me</button>
        </div>            
      )
    }
  }
  ```
  we will get a error that <b>this is undefine</b> because this is not define under a event handler
  > ```this``` keyword is undefined in an event handler that is the reason why it's necessary to learn event binding react class component
  * There are multiple types of event handlers list goes something like this:
    1. Using bind keyword
      ```<button onClick={this.changeDataOut.bind(this)}>Like me</button>```
      Every update to the status cause the component to rerender and this in return brand new event handler on every render...\
      > It can create a issue at component that content nested childrens component
    2. Use arrow function in render method
      ```<button onClick={()=>this.changeDataOut()}>Like me</button>```
    3. binding the event handler in the construct as a post to binding in the rerender method
      ```js
      constructor(){
        super()
        this.state = {
          msg:"Give us a star"
        }
        this.changeDataOut = this.changeDataOut.bind(this)
      }
      changeDataOut(){
        this.setState({
          msg:"Thanks Your for Liking me"
        })
      }
      render(){
        return(
          <div>
            <p>{this.state.msg}</p>
            <button onClick={this.changeDataOut}>Like me</button>
          </div>            
        )
      }
      ```
    4. Using a arrow function as a class property
      ```js
      constructor(){
        super()
        this.state = {
          msg:"Give us a star"
        }
      }
      changeDataOut=()=>{
        this.setState({
          msg:"Thanks Your for Liking me"
        })
      }
      render(){
        return(
          <div>
            <p>{this.state.msg}</p>
            <button onClick={this.changeDataOut}>Like me</button>
          </div>            
        )
      }
      ```
* ## Methods as props
  * Using parent component can pass down props to the childrens component but if a child
    component wanted To communicate with the parents component then we still can use props
    but this time we pass in a reference Tu to a method as props to the child component
  * eg: I want to call a method in the parent component from a button in a child component
    So we will create two files one will be parents.js another will be children.js\
    parents.js
    ```js
    import Childern from './childern';

    class Parents extends Component{
        constructor(props){
            super()
            this.state = {
                defmsg:"Dear,"
            }
            this.callpopupalert = this.callpopupalert.bind(this)
        }
        callpopupalert(){
            alert(`Hello ${this.state.defmsg}`)
        }
        */
        render(){
            return(
                <div>
                    <Childern popupalert = {this.callpopupalert}/>
                </div>
            )
        }
    }
    ```
    children.js
    ```js
    function Childern(props){
        return(
            <div>
                <button onClick={props.popupalert}>Alert plz</button>
            </div>
        )
    }
    ```
    > So if you need to pass a parameter by calling parent method you can do like:\
    In parents.js ```<button onClick={()=> props.popupalert('Sukarna')}>alert</button>```\
    and In childrens.js ```popupalert(msg){alert(`Hello ${this.state.defmsg} ${msg}`)}```

* ## Conditional Rendering
  * when you build a react application you may need to show or hide the HTML based on the conditon 
  * there are different type of contion in react:
    1. if/else
      it's like :\
      create a class component and in that we will change the state based on if/else...
      ```js
      // inside constructor...
      this.state = { permition: false }
      render(){
        if(this.state.permition){
          return <p>wow you are allowed</p>
        } else{
          return <p>sorry you are not allowed</p>
        }
      }
      ```
    2. element variables
      ```js
      render(){
        let msg
        if(this.state.permition){
          msg =  <p>wow you are allowed</p>
        } else{
          msg = <p>sorry you are not allowed</p>
        }
        return(<div>{msg}</div>)
      }
      ```
    3. ternary conditionl operator
      * we can use this under JSX
      ```js
      render(){
        return(
          this.state.permition ? <p>wow</p> : <p>oops</p>
        )
      }
      ```
    4. short circuit operator
      * do or just leave 
      ```js
      render(){
        return(
          this.state.permition && <p>wow</p>
        )
      }
      ```

* ## List Rendaring
  * sometimes you might have to display list of datas...
  * in JS we have a *map method* to itterate over array and return with changes
  * ### quick look of ```map``` method
    * the *map()* method creates a new array with the results of calling a provided function
      on every elements in the array
      ```js
      var myarray = [1,2,3,4]
      const mapping = myarray.map(x => x*2)
      console.log(mapping)
      // Output : [2,4,6,8]
      ```
  * we can handel list in some ways like :
    1. ```js
      const name = ["Sukarna","spoothi","poomee"]
      return(
        <div>
          <p>{name[0]}</p>
          <p>{name[1]}</p>
          <p>{name[2]}</p>
        </div>
      )
      ```
    2. ```js
      const name = ["Sukarna","spoothi","poomee"]
      return(
        <div>
          {
            data = name.map(x => <p>{x}</p>)
          }
        </div>
      )
      // OR
      const data = name.map(x => <p>{x}</p>)
      return(<div>{data}</div>)
      ``` 
    3. if you have multiple data then 
      ```js
      const data=[
        {
          id:1,
          name:'Sukarna Jana',
          age:17
        },
        {
          id:2,
          name:'Spoorthi S',
          age:17
        },
        {
          id:3,
          name:'Poornima',
          age:17
        }
      ]
      const datalist = data.map(x => (
        <p>Name:{x.name}, Age:{x.age}</p>
      ))
      ```
      > But doing in this way you will see a error in console
      ```Each child in an array or interalor should have a unique "key" porps```

  * So, we need to see the unique data so as we know our id is unique
    ```js
    const datalist = data.map(x => (
      <p key={x.id}>Name:{x.name}, Age:{x.age}</p>
    ))
    ```
    > key is a reserved props so you can't use 

    * ```key``` is a special string attribute you need to include when creating lists as elements
    * key gives the element a stable indentity
    * keys help react to identify which items have changed are added or are removed
    * help in efficient update at the user interface

  * ### Index as key
    > avoid if possible

    * we can use index of element in the key
      ```js
      const datalist = data.map((x,index) => (
          <p key={index}>{x}</p>
      ))
      ```
    1. the items in your list do not have a unique id (it you have someting unique
      then use that only as a key)
    2. the list is a static list and will not change (never add item to the list, removing
      items from the list)
    3. the list will never be reordered or filtred

* ## Styling and CSS Basic
  * styling React Components
    1. CSS Stylesheets
      file: myStyle.css
      ```css
      .myMainstyle{
        color:#ff00ff
      }
      ```
      file: MainApp.js
      ```js
      import './myStyle.css'
      function App(props){
        let styleType = props.primary? 'myMainstyle':''
        return(
          <p className={styleType}>Hello</p>
          //or
          <p className='myMainstyle'>Hello</p>
        )
      }
      ```
    2. Inline Styling
      in react inline styles are not specify Instead they are specified object whose keys are camelcase version style name and the value is usually a string
      eg:
      ```js
      function App(){
        const styleType = {
          fontSize:'50px',
          color:'red'
        }
        return(
          <p className={styleType}>Hello</p>
        )
      }
      ```
    3. CSS Modules
      The module CSS files are be like : ```FILENAME.module.css```
      If we create a stylesheet without a module then it can be implement in all the child component also but if you need to be specific to particular then you need to use CSS module to implement in particular component
      file: myStyle.module.css
      ```css
      .myMainstyle{
        color:#ff00ff
      }
      ```
      file: MainApp.js
      ```js
      import style from './myStyle.module.css'
      function App(){
        return(
          <p className={style.myMainstyle}>Hello</p>
        )
      }
      ```
    4. CSS in JS Libaries
      > not going to learn now

* ## Form Handling
  * They are also known as *Control Components*\
    this are elements whoes value is control by react
  * ```onClick={...}``` its fired when ever there is a change in input field.
  * when we submit the form its reload to prevent that 
    ```js
    showForm = (event) => {
      //The task you want to do just do...
      event.preventDefault()//<- it will prevent from reloading the page
    }
    //inside form
    <form onSubmit={this.showForm}>
      <button type="submit">Submit</button>
    </form>
    ```
  * I hope by the bellow example you have get how it's working
  ```js
  class MainForm extends Component{
      constructor(){
          super()
          this.state={
              name:'',
              age:0,
              day:'Sun',
              say:''
          }
      }

      writeName = (event) =>{
          this.setState({
              name:event.target.value
          })
      }
      writeAge = (event) =>{
          this.setState({
              age:event.target.value
          })
      }
      writeDay = (event) =>{
          this.setState({
              day:event.target.value
          })
      }
      writeSay = (event) =>{
          this.setState({
              say:event.target.value
          })
      }
      showForm = (event) => {
          alert(`Great ${this.state.name} Your Form has submited successfuly\n
          Your Name: ${this.state.name}\n
          Your Age : ${this.state.age}\n
          Today is : ${this.state.day}\n
          Your Quary is : ${this.state.say}`)
          event.preventDefault()
      }

      render(){
          return(
              <form onSubmit={this.showForm}>
                  <div>
                      <label>Name</label>
                      <input type="text" value={this.state.name} onChange={this.writeName}/><br/>
                      <label>Age</label>
                      <input type="number" value={this.state.age} onChange={this.writeAge}/><br/>
                      <label>What is the Day</label>
                      <select value={this.state.day} onChange={this.writeDay}>
                          <option value="Sun">Sunday</option>
                          <option value="Mon">Monday</option>
                          <option value="Tue">Tuesday</option>
                          <option value="Wed">Wednesday</option>
                          <option value="Thu">Thursday</option>
                          <option value="Fri">Friday</option>
                          <option value="Sat">Saturday</option>
                      </select><br/>
                      <label>Want to say something</label>
                      <textarea value={this.state.say} onChange={this.writeSay}/><br/>
                      <button type="submit">Submit Form</button>
                  </div>
              </form>
          )
      }
  }
  ```

License Under : [LICENSE](LICENSE)