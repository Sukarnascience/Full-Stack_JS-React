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
  * ## [OLD Version (Billow V16.8.0)](#Documentation)
  * ## [With Hooks New Vesrion (Above V16.8.0)](#About-Hooks)
  * I want to give credit to a [YouTube Playlist](https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3) created by [Codevolution](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw) from where i have learn this all stuffs 

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
class welcome extends Component{
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
    1. 
      ```js
      const name = ["Sukarna","spoothi","poomee"]
      return(
        <div>
          <p>{name[0]}</p>
          <p>{name[1]}</p>
          <p>{name[2]}</p>
        </div>
      )
      ```
    2. 
      ```js
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
* ## LifeCycle Methods
  * ### Mounting
    * mounting lifecycle are called when an instance of a component is being created and inserted 
      into the DOM \
      eg: ```constructor```,```static getDerivedStateFromProps```,```render``` and ```componentDidMount```
    * ```constructor(props)``` 
      * A special function that will get called whenever a new components is created 
      * used for initilizing state,binding the event handler
      * do not cause side effects eg:- HTTP Requests.
      * when you create your own components call - ```super(props)``` & directly overwrite ```this.state```
    * ```static getDerivedStateFromProps(props,state)``` (rerely use lifecycle mount)
      * is used when the state of the component depends on changes in props over time.
      * used for set state (need to return object that represent the new state of the components)
      * do not cause side effect eg:- HTTP requests.
    * ```render()```
      * only required method
      * used for read props & states and return JSX
      * do not change states or interact with DOM or make ajax calls
      * children components lifecycle methods are also executed
    * ```componentDidMount()```
      * call only once in the whole life cycle of a given component
      * it is invoked immediatly after a component and all its children components have been render fo the DOM
      * used for cause side effect eg:- Interact with the DOM or perform any ajax calls to loud data
    * In CODES its look like 
      ```js
      //create a class
        constructor(props){
          super(props)
          this.state={
            data:"Hi"
          }
          /* <--- Our Lifecycle A ---> */
        }
      static getDerivedStateFromProps(props,state){
        /* <--- Our Lifecycle B ---> */
        return null
      }
      componentDidMount(){
        /* <--- Our Lifecycle D ---> */
      }
      return(){
        /* <--- Our Lifecycle C ---> */
        return <p> hi </p>
      }
      ```
      if a component has a child component thin the flow will be :- \
      ```js
      /* <--- Our Lifecycle A1 ---> */
      /* <--- Our Lifecycle B1 ---> */
      /* <--- Our Lifecycle C1 ---> */
      /* <--- Our Lifecycle A2 ---> */
      /* <--- Our Lifecycle B2 ---> */
      /* <--- Our Lifecycle C2 ---> */
      /* <--- Our Lifecycle D2 ---> */
      /* <--- Our Lifecycle D1 ---> */
      ```
  * ### Updating
    * when a component is being re-rendered as a result of changes to either its props or state\
      eg: ```getSnapshotBeforeUpdate```,```static getDerivedStateFromProps```,
      ```shouldComponentUpdate```,```render``` and ```componentDidUpdate```
    * ```static getDeriveStateFromProps(props,state)```
      * this is a statis method which recive props and state as a parameter and has to return null or object - repesent state of the component
      * method is called everytime a component is re-rendered
      * is used to set the state
      * do not cause any side effect eg: HTTP requests
    * ```shouldComponentUpdate(next props,next state)```
      * detects is the component should re-render or not\
      ( Defalt: class component re-render on every changes )\
      So, to prevent that we use this
      * performance optimization
      * do not cause side effect eg: HTTP request...
      * calling the setState method
    * ```render()```
      * only required method 
      * read props & state and return JSX
      * do not change state or interact with DOM or make ajax calls
    * ```getSnapshotBeforeUpdate(perv Props, prev State)```
      * called right before the changes from the virtual DOM are to be certified in DOM
      * capture some information from the DOM
      * method will either return null or return a value
      * render value will be passed as the 3rd parameter to the next method
    * ```componentDidUpdate(prev Props, prev State, snapshot)```
      * called after the render is finished  in the re-render cycles
      * cause side effects
    * In CODES its look like 
      ```js
      //create a class
        constructor(props){
          super(props)
          this.state={
            data:"Hi"
          }
        }
      static getDerivedStateFromProps(props,state){
        /* <--- Our Lifecycle A ---> */
        return null
      }
      shouldComponentUpdate(){
        /* <--- Our Lifecycle B ---> */
        return true
      }
      getSnapshotBeforeUpdate(prev props,prev state){
        /* <--- Our Lifecycle D ---> */
        return null
      }
      componentDidUpdate(){
        /* <--- Our Lifecycle E ---> */
      }
      change=()=>{
        this.setState({
          data:"hello"
        })
      }
      return(){
        /* <--- Our Lifecycle C ---> */
        return <button onCLick={this.change}>State changes</button>
      }
      ```
      if there is a child component too then
      ```js
      /* <--- Our Lifecycle A1 ---> */
      /* <--- Our Lifecycle B1 ---> */
      /* <--- Our Lifecycle C1 ---> */
      /* <--- Our Lifecycle A2 ---> */
      /* <--- Our Lifecycle B2 ---> */
      /* <--- Our Lifecycle C2 ---> */
      /* <--- Our Lifecycle D2 ---> */
      /* <--- Our Lifecycle D1 ---> */
      ```
      if once both child & parents are done then ```getSnapshotBeforeUpdate(perv Props, prev State)``` will be
      ```js
      //...
      /* <--- Our Lifecycle D2 ---> */
      /* <--- Our Lifecycle E2 ---> */
      /* <--- Our Lifecycle D1 ---> */
      /* <--- Our Lifecycle E1 ---> */
      ```
  * ### Unmounting
    * when a component is being removed from DOM eg: ```componentWillUnmount```
    * ```componentWillUnmount```
      * method is invoked immediately before a component is unmounted and distroyed
      * (clean up task) cancelling any network requests removing event handaler, cancelling any subscription and also invalidating timers
      * do not call the setState method
  * ### Error Handaling
    * when there is an error during rendering in a lifecycle method or in the constructor of any child component eg: ```static getDerivedStateFromError``` and ```componentDidCatch``` 
    * ```static getDerivedStateFromError(error)```  
    * ```componentDidCatch(error,info)```

* ## Fragments
  * A common pattern in react is for a component to render multiple elements 
  * fragments let you group a list of children without adding extra nodes to the DOM
  * eg:
    ```js
    function Mydata(){
      return(
        <div>
          <h3> Data 1 </h3>
          <p> Data 2 </p>
        </div>
      )
    }
    // we commenly wright in this way but this is adding a useless tag 
    /*
     * if we inspect app.js or browser
     * <div> <- of app.js
     *  <div> <- of components
     *   <h3> Data 1 </h3>
     *   <p> Data 2 </p>
     *  </div>
     * </div>
     */
    ```
    SO, to get rid of that extra ```<div>``` tag
    ```js
    function Mydata(){
      return(
        <React.Fragment>
          <h3> Data 1 </h3>
          <p> Data 2 </p>
        </React.Fragment>
      )
    }
    ```
    * more practical use will be like:
    > create 2 files
    * file1.js
      ```js
      <div>
        <h2>Table:-</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Relation</th>
              <th>DOB</th>
            </tr>
            <file2/>
          </tbody>
        </table>
      </div>
      ```
    * file2.js
      ```js
      //if we use
      <div>
        <tr>
          <td>Sukarna Jana</td>
          <td>Author of this page</td>
          <td>19-09-2003</td>
        </tr>
        <tr>
          <td>Spoorthi S</td>
          <td>Author's Best Friend</td>
          <td>05-08-2003</td>
        </tr>
      </div>
      ```
      then we will get a error on console because in table child component should not have ```<div>``` in between SO, its wrong then ```<React.Fragment>``` comes handy
      ```js
      <React.Fragment>
        <tr>
          <td>Sukarna Jana</td>
          <td>Author of this page</td>
          <td>19-09-2003</td>
        </tr>
        <tr>
          <td>Spoorthi S</td>
          <td>Author's Best Friend</td>
          <td>05-08-2003</td>
        </tr>
      </React.Fragment>
      ```
  * ## Pure components
    * to make a pure components: 
      ```js
      import React,{PureComponent} from 'react'
      class MyPureCom extends PureComponent{
        /*
         * Your Other code
         */
      }
      ```
    * to understand more properly we will make 3 files
      1. Parent Component
        ```js
        import React,{Component} from 'react';
        import MyPureComp from './MyPureComp';
        import MyRegularComp from './MyRegularComp';

        class ParentOfPureRegular extends Component{
            constructor(props){
                super(props)
                this.state={
                    count:0
                }
            }
            componentDidMount(){
                setInterval(() => {
                    this.setState({
                        count: 0
                    })
                },2000)
            }
            render(){
                console.log("this is the Parent of pure and regular component")
                return(
                    <div>
                        <h3>Parent of pure and regular component</h3>
                        <MyPureComp data={this.state.count}/>
                        <MyRegularComp data={this.state.count}/>
                    </div>
                )
            }
        }
        ```
      2. Pure component
        ```js
        import React,{PureComponent} from 'react';

        class MyPureComp extends PureComponent{
            render(){
                console.log("Pure Component is re-rendered")
                return(
                    <p>This Pure Component has been re-render {this.props.data} (See in console)</p>
                )
            }
        }

        export default MyPureComp;
        ```
      3. Regular Component
        ```js
        import React,{Component} from 'react';

        class MyRegularComp extends Component{
            render(){
                console.log("Regular Component is re-rendered")
                return(
                    <p>This Regular Component has been re-render {this.props.data} (See in console)</p>
                )
            }
        }

        export default MyRegularComp;        
        ```
    * <table>
        <tr>
          <th>Regular Component</th>
          <th>Pure Component</th>
        </tr>
        <tr>
          <td>* A regular component does not implement the ```shouldComponentUpdate()``` method. Its always return true as default</td>
          <td>* A pure component on other hand implements ```shouldComponentUpdate()``` method with a shallow propsvand state components</td>
        </tr>
      </table>
    * ### Shallow Comparison (we will call as : SC)
      * #### Primitive Type (num,str,boolen)
        * a SC b return true if a and b have the same value and are of same types\
        eg: string: 'SJ' SC string: 'SJ' returns true
      * #### Complex Types (object,array...)
        * a SC b returns true if a & b reference to exact same object\ eg:
        ```js
        var a = [1,2,3];
        var b = [1,2,3];
        var c = a;
        var ab_eq = (a===b); //false
        var ac_eq = (a===c); //true

        /* another example */

        var a = {x:1,y:2};
        var b = {x:1,y:2};
        var c = a;
        var ab_eq = (a===b); //false
        var ac_eq = (a===c); //true
        ```
      * SC of prevState with current State\
        SC of prevProps with current Props\
        if there is a difference they re-render component
      * if parents not re-render then childeren will also not re-render
      * never mutate the state, always return a new object that reflects the new state
      * #### Pure component : if there is no difference the component is not re-rendering
        - performence Boost
        - its a good idea to ensure that all the childern components are also pure to avoide unexpacted behaviour

* ## Memo 
  > version 16.6 above
  * Pure component only re-render the class component when their ia a difference in shallow comparison of props/states
  * prue component only work with class based component
  * to use in function component the same feature then ```React.memo``` comes in place
  * memo(function) == PureComponent(class)
  * eg:- ```MyMemoComp.js```
    ```js
    import React from 'react';

    function MyMemoComp({data}){
        console.log("Memo Component is re-rendered")
        return(
            <p>This Pure Component has been re-render {data} (See in console)</p>
        )
    }

    export default React.memo(MyMemoComp);
    ```
    * in earlear code where parents component re-render in every 2sec. include this child 
      ```<MyMemoComp data = {this.props.count} />```
    * and when we see output memo is render onces and parents keep on re rendering

* ##  Refs
  * Refs make possible to access DOM notes directly without react\
  eg: focasing on a text input (let us asume we have a login now as soon as the page lodes the username input field to be focused)
  * example i want to focus on input while page opens / reload 
    * there is 3 steps:
      - Step 1 : (Create a refs)
        ```js
        // inside constructor
        this.inputRef = React.createRef()
        //...
        ```
      - Step 2 : (attach the Refs to our input element in the render method )
        ```js
        // we use 'ref' attribute
        //....
        <input type="text" ref={this.inputRef}/>
        //....
        ```
      - Step 3 : ( call the focuse method on this input element )\
        but first what exetly does the property hold after a ref is created So, we will:
        ```js
        componentDidMount(){
          console.log(this.inputRef)
        }
        ```
        after doing this we will get a output like:\
        Console: Object>current:input...>...\
        we can see a object has been log in the console If we expand we can see a property called 'current' of type input (because we have refer input in ref) and this 'current' property contain the actual DOM noted So, to focus in input element in componentDidMount() we simply call 'focus()' method on the 'current' property
        ```js
        componentDidMount(){
          this.inputRef.current.focus()
          //console.log(this.inputRef)
        }
        ```
      - So, 2nd use of ref is to fetch the input value 
        ```js
        //inside render
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.ifetch}>Click</button>
        //...
        ```
        Lets create ifetch function
        ```js
        ifetch = () => {
          alert(this.inputRef.current.value)
        }
        ```
        we are accessing the value property of the input DOM note as a current property
    * React has a 2nd way to set refs which is called 'CallBack ref' (it's Old way)
      - Step 1:
        ```js
        // inside constructor()
        this.cbRef = null
        // Created a property asign a value of null
        this.setCbRef = (element) => {
          this.cbRef = element
          // created a method asign a DOM element to the Ref
        }
        ``` 
      - Step 2:
        ```js
        <input type="text" ref={rhis.setCbRef}/> 
        ```
      - Step 3:
        inside the React callback ref react will call the ref with a DOM element when the component mounts and call it with null when its unmounts
        ```js
        componentDidMount(){
          if(this.cbRef){
            this.cbRef.focus() // we can access directly without using current
          }
        }
        ```
  * ### Refs with class components
    * at the above topic we saw how to add refs to a normal HTML element like input element but its posible to add a refs in class component also
      eg: File1Input.js
      ```js
      //create a class
      //create a constructor
      this.inputRef=React.createRef()
      //create a method
      focusInput(){
        this.inputRef.current.focus()
      }
      //inside return
      <input type="text" ref={this.inputRef}/>
      ```
      Now we will create a parent component File2FocusInput.js
      ```js
      import YourClassName from './FIle1Input'
      //create a class
      //inside constructor()
      this.componentRef = React.createRef()

      clickHandler = () =>{
        this.componentRef.current.focusInput()
        // focusInput() its came from child component
      }
      //inside return
      <YourClassName ref={this.componentRef}>
      <button onClick={this.clickHandler}>
      ```
      So, output will be when even i click the button its get focus into the text box
  * ### Forwording refs
    * is a tecnic for automatickly passing a ref through a component to one of their child
    * eg:\
      Parent Component - FRParentInput.js
      ```js
      //import your child component
      import FRInput from './FRInput'
      import React, { Component } from 'react'

      class FRParentInput extends Component{
          constructor(props){
              super(props)
              this.inputRef = React.createRef()
          }

          clickMe = ()=>{
              this.inputRef.current.focus()
          }

          render(){
            return(
              <FRInput ref={this.inputRef}/>
              <button onClick={this.clickMe}>
            )
          }
      }
      ```
      and in child component - FRInput.js
      ```js
      import React from 'react'
      const FRInput = React.frowardRef((props,refrence)=>{
        return <input type="text" ref={refrence}/>
      })
  * ## Portals
    * Provide a way to render children into s DOM note exist outside the DOM higher key of parent component
    * eg: So far we have only 1 DOM element node in HTML that we ware mounting in our react application
    * if we see ```index.html``` we will get to see ```<div id='root'>...</div>```
    * and in ```index.js``` we get to see:\
      ```js
      ReactDOM.render(<App/>,document.getElementById('root'));
      ```
    * portal provide the ability to break out of the DOM tree
    * For creating our own lets create and understand by an example:
    * (Create a DOM note which fall outside the root element)
      - Step 1: (In ```index.html``` write)
        ```<div id="MyCustomPortal">...</div>```
      - Step 2: (lets create a new component) MyPortal.js
        ```js
        import React from 'react'
        import ReactDOM from 'react-dom'

        function MyPortal(){
          return ReactDOM.createPortal(
            <p>Woow i am outside 'root'</p>,
            document.getElementById('MyCustomPortal')
          )
        }

        export default MYPortal
        ```
      - Step 3: (Add in main File which is App.js)
    * ReactDOM.createPortal(TAKES 2 PARAMETER)
      - 1. JSX which you want to render
      - 2. DOM note to mount the element
  * ## ERROR Boundary
    * Error handling phase methods
      - static getDerivedStateFromError(error)
      - componentDidCatch(error,info)
    * When there is a app crash it kept into a broken state (it's unmount component tree)
    * we can catch a error in component tree and display a fall back UI
    * a class component that implements either 1 or both of the lifecycle methods
      - getDerivedStateFromError or componentDidCatch becomes an error boundary
    * the static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log error informantion 
    * example: MyBFF.js
      ```js
      import React from 'react'
      function MyBFF({BFFName}){
        if(BFFName!='spoorthi'){
          throw new Error(`No!, ${BFFName} is not authors BFF`)
        }
        return(
          <p>Yea {BFFName} is Authors BFF</p>
        )
      }
      //...
      ```
      and in main file (App.js)
      ```js
      <MyBFF BFFName="spoorthi"/>
      <MyBFF BFFName="nandan"/>
      ```
      But the whole UI crash 
    * we dont want this if a perticular component throus error only that component should back into UI and other component should not be effected
    * so, MyERRORBoundary.js
      ```js
      import React,{Component} from 'react'

      class MyERRORBoundary extends Component{
          constructor(props){
              super(props)
              this.state={
                  hasError:false
              }
          }

          static getDerivedStateFromError(error){
              return{
                  hasError:true
              }
          }

          componentDidCatch(error,info){
              console.log(error)
              console.log(info)
          }

          render(){
              if(this.state.hasError){
                  return <p>Ooops! Something went wrong</p>
              }
              return this.props.children
          }
      }

      export default MyERRORBoundary;
      ```
      in MyBFF.js
      ```js
      import React from 'react'

      function MyBFF({BFFName}){
          if(BFFName!=='spoorthi'){
              throw new Error(`No!, ${BFFName} is not authors BFF`)
          }
          return(
          <p>Yea {BFFName} is Authors BFF</p>
          )
      }

      export default MyBFF;
      ```
      in App.js
      ```js
      <MyERRORBoundary>
        <MyBFF BFFName="spoorthi"/>
      </MyERRORBoundary>
      <MyERRORBoundary>
        <MyBFF BFFName="nandan"/>
      </MyERRORBoundary>
      ```
      - output will be : \
      Yea spoorthi is Authors BFF \
      No!, nandan is not authors BFF
      > you will still see error because product is in developing stage so by clicking in ```x``` at corner you can see the actual output
    * ### Summary
      * error boundaries are react component that catch js error in their child component tree, log thoes error and display a fall-back UI
      * A class component becomes an error boundary by defining either both of getDerivedStateFromError and componentDidCatch life cycle method
      * the placement of the error boundary also metters as it controls it entire app should have the fall-back UI or just the component causing the problem
      * provide a way to gracetully handle error in application code 
  * ## Higher Order Components - HOC
    * let me start with a counter example...\
    eg: ClickCount.js
    ```js
    class ClickCounter extends Component{
      constructor(props){
        super(props)
        this.state = {count:0}
      }
      incrementCount = () => {
        this.setState(prevState =>{
          return {count:prevState.count+1}
        })
      }
      render(){
        const {count} = this.state
        return <button onClick={this.incrementCount}>Click {count} times</button>
      }
    }
    ```
    this was no. of click but if i include the count no. hover then we need to dublicate the whole code and add ```<h3 onMouseOver={this.incrementCount}>You have hover from me {count} times</h3>``` 
    * we are dublicating code not reusing the function means in click counter and hover counter we are just rewrite the same function
    * Component Tree 
      <code>
        Parent -> clickCounter (both are shareing same parents)
               -> howerCounter (state is taken from parent and props are same for both)
      </code>
    * lift counter logic to parents and pass props but if:
      <code>
        parent -> clickCounter
               -> component A > component B > howerCounter
               (then its create problem) 
      </code>
    * ### what is HOC
      * a pattern where a function takes a component as an argument and returns a new component
      * 
        ```js
        const NewComponent = higherOrderComponent(orginal component)
        /* NewComponent we also say as : enhanced component
        ```
    > Advantage : all the states will different for differen component
    * eg: firstCounter.js
      ```js
      import React,{Component} from 'react'
      // MyHOCCounter is our new component 
      // WrappedComponent is our orginal component (props)
      const MyHOCCounter = WrappedComponent=>{
          class MyHOCCounter extends Component{
              constructor(props){
                  super(props)
                  this.state = {count:0}
              }
              incrementCount = () => {
                  this.setState(prevState =>{
                      return {count:prevState.count+1}
                  })
              }
              render(){
                  return(
                  <WrappedComponent 
                  count = {this.state.count} 
                  incrementCount = {this.incrementCount}
                  />
                  )
              }
          }
          return MyHOCCounter
      }
      export default MyHOCCounter;
      ```
      Now we will use to track No. of click\
      HOCClick.js
      ```js
      import React, {Component} from 'react'
      import MyHOCCounter from './firstCounter'

      class HOCClickCounter extends Component{
          render(){
              const {count,incrementCount} = this.props
              return <button onClick={incrementCount}>You have clicked {count} times</button>
          }
      }
      export default MyHOCCounter(HOCClickCounter);
      ```
      Now we will use to track No. of hover with the same counter (MyHOCCounter)\
      HOCHover.js
      ```js
      import React, {Component} from 'react'
      import MyHOCCounter from './firstCounter'

      class HOCHoverCounter extends Component{
          render(){
              const {count,incrementCount} = this.props
              return <p onMouseOver={incrementCount}>You have clicked {count} times</p>
          }
      }
      export default MyHOCCounter(HOCHoverCounter);
      ```
    * the props is passed to the HOC but not to the component that rapped \
      So, to fixed this in HOC
      ```
      <WrappedComponent ...>
        {...this.props}
        ...
      ```
      by this it says other remaning props just passout 
    * if you dont want to use ```...this.props``` then\
      Counter.js
      ```
      <button onClick={incrementCount}>...{this.props.name}...
      ```
      and in app.js
      ```<Counter name="sj">```
      - then it is not going to show any thing 'sj' So, by using {...this.props}
    * passing parrameter in HOC function
      ```
      const withCounter(WrappedComponent,NoOfComp..)=>{
        ...
      }
      ```
  * ## Render Props
    * the term "render props" refers to a tecnique for sharing code between react component using a props whoes value is a function
    * lets understand by example...
      - Example 1: passing a function in the tag
        ```js
        <User name={()=>'Sukarna'}/>
        ```
        and to use that function 
        ```js
        //... 
        return(
          <div>{this.props.name}</div>
        )
        ```
      - Example 2: if we need parameter to the function in the props based on parameter changes the output then,
        ```js
        <IsUserName name={(nameIs)=>nameIs?'Sukarna':'Gest'}/>
        ``` 
        and the in function:
        ```js
        //....
        class IsUserName extends Component{
            render(){
                return(
                    <div>{this.props.name(true)}</div>
                )
            }
        }
        //....
        ```
      - Example 3: we will make a counter...\
        renderFile.js
        ```js
        //...
        class CounterRenderProps extends Component{
            constructor(props){
                super(props)
                this.state={
                    count:0
                }
            }
            incrementCount = () =>{
                this.setState(prevState=>{
                    return{count:prevState.count+1}
                })
            }
            render(){
                return(
                    <div>
                        {this.props.render(this.state.count,this.incrementCount)}
                    </div>
                )
            }
        }
        //...
        ```
        parent where it will be in use...
        ```js
        <CounterRenderProps render={(count,counter)=>(
        <RunRenderPropCount count = {count} counter = {counter}/>)}/>
        ```
        to handel the props another file...
        ```js
        //...
        class RunRenderPropCount extends Component{
            render(){
                const {count,counter} = this.props
                return(
                    <div>
                        <p>render counter from props</p>
                        <button onClick={counter}>You have clicked - {count}</button>
                    </div>
                )
            }
        }
        //...
        ```
      - if you want to passas a children u can by just
        ```
        {this.props.childern(...)}
        ```
        and the place you want to use 
        ```
        <MyrenderProps>
          {...your function...}
        </MyrenderProps>
        ```
  * ## Context
    * context propvide a way to pass data through the component tree without having to pass the props down manually at every level

    <code>
    App -> CA1
        -> CA2 > CB2 > CC2
        -> CA3 > CB3 > CC3 > CD3
    </code>

    I need a props should go from app to CD3 directly so then context comes
    * we can do this in 3 step:
      - Step1: Create context
        ```js
        const UserContext = React.createContext()
        ```
        now the ```createContext``` method comes with a provider and a consumer react component to grab that ...
        ```js
        const UserProvider = UserContext.Provider
        const UserConsumer = UserContext.Consumer
        ```
        to use in other component you need to export it
        ```export {UserProvider,UserConsumer}```
      - Step2: Provide a context value \ 
        at the top level where the props is going to pass to other nested component tree
        ```js
        import {UserProvider} from 'filePath'
        <UserProvider value="Sukarna">
          // pass to component tree
          <CA3/>
        </UserProvider>
        ```
      - Step3: Consume the context value \
        now the component which required the pass on value
        ```js
        //this is CD3
        import {UserConsumer} from 'filePath'
        //...
        <UserConsumer>
          {name=>{
            return <p>{name}</p>
          }}
        </UserConsumer>
        ```
        our username is the pass on value which we passed in ```<UserProvider>```
    * We can set a defalt value to our context
      - Step1: while creating the context its pass as a argument to create context method
        ```js
        const UserContext = React.createContext('Jana')
        ```
        if you dont use ```<UserProvider>``` ths "Jana" will be defalt will pass to ```<UserConsumer>```

    * ### Context type property 
      at last example we see that how to use UserConsumer to consume the context value, But there is a other way : \
      
      - Use context type property on a class, for that we need to pass ```UserContext``` only
        ```js
        export default UserContext
        ```
        Now the Component which need to consume in the component tree there will ```CLASS_NAME.contextType = UserContext``` bilow class and to see the context data inside class render ```{this.context}```...

      - if your application supports public class fild sintax we can replace ```CLASS_NAME.contextType = UserContext``` by typing inside the render() ```static contextType = UserContext```

    > Its has a limitation that its only work with class component

    * ### consume multiple context

      * Example 

        ```js
        function content(){
          render(
            <ThemeContext.Consume>
              {theme=>(
                <UserContext.Consume>
                  {user=>(
                    <ProfilePage user={user} theme={theme}/>
                  )
                  }
                </UserContext.Consume>
              )}
            </ThemeContext.Consume>
          )
        }
        ```

  * ## Mini Project to understand HTTP GET & POST 
    > we will use axios So, to install axios go to the dir where your porject is and then if you are using npm then in shel/terminal type: ```npm install axios -- save``` 
    
    * see the code once 
      - For Posting [CODE](demo/src/components/HTTPPostData.js)
      - For Fetching [CODE](demo/src/components/HTTPGetFetch.js)

# About Hooks
* ## What is Hooks?
  Hooks are a new feature addition in <b>React Version 16.8.0</b> which will allow you to use React feature without having to write a class, eg: State of the component 

> Hooks don't work inside classes...

* ## Why Hooks?
  - Reason1: 
    * understand how "this" keywords works in JS
    * remember to bind event handler in class components
    * classes don't midify very well & makes hot reloading very unreliable 
    With hooks we dont use class so all this porblem are solve 
  - Reason2:
    * there is no periticular way to reuse state full component logic 
    * HOC & render props patterns do address this problem 
    * makes the code harder to follow
    * there is need a to shere state full logic in a better way
  - Resion3:
    * create components for complex scenarios such as data fetching & subscribing to events
    * related code is not organized in one place \ 
      example: data fetching - in componentDidMount & componentDidUpdate
      example: event listeners - in componentDidMount & componentWillUnmount
    * Because of this statefull logic - cannot break components into smaller onces
  - Note worthy points:
    1. it will work only in React verison 16.8 or higher
    2. Hooks don't contain any breaking changes & the release is 100% backword compatible
    3. Classes won't be removed from react there are still there 
    4. you can't use hooks inside of a class Component 
    5. now hooks provide a more direct API to the react concepts you already know
* ## Rules of hooks
  * only call hooks on the top level
  * don't call hooks inside loops, conditions or nested function 
  * only call hooks from react function 
  * call them from with in react functional component and not just any regular JS function 

* ## useState
  * if we started writing a function component and rap into a situation where you needed to app state then you have to convert the component to class component...
  * that is because state only be used in class component we will change that opinion by using state hooks by which we can use state on functional component 
  * Example 1: lets creat a counter 
    - normally we use without hooks was : Create class > create state > create method > in render add button with onClick event 
    - but now using Hooks:\
      (Hooks accept a arument which is the initial value of the state property and returns the current value of the state and a method that is capable of updating that state property)
      ```js
      import React,{useState} from 'react'

      function CounterOne(){
          const [count,setCount] = useState(0)
          return(
              <div>
                  <button onClick={()=>setCount(count+1)}>Your Count is {count}</button>
              </div>
          )
      }

      export default CounterOne;
      ``` 
  * ## useState hooks with previous state
    example: we will use count method but with increment, dicrement, reset
    * without taking previous state and doing task is unsafe (its not the right way to change state value )
    ```js
    function CounterTwo(){
        const initialValue = 0;
        const [count,setCount] = useState(initialValue);
        const incrementFive = () => {
            for(let i = 0; i < 6; i++){
                setCount(prevState=>prevState + 1)
            }
        }
        /* Another way to increment 5 is 
        const incrementFive = () => {setCount(prevState=>prevState.count + 5)}
        */
      return(
          <div>
              <p>Present Value: {count}</p>
              <button onClick={()=>setCount(initialValue)}>Reset</button>
              <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
              <button onClick={()=>setCount(prevState=>prevState-1)}>Dicrement</button>
              <button onClick={incrementFive}>Increment 5</button>
          </div>
      )
    }
    ```
  * ## useState hooks with object
  lets understand by a demo
  ```js
  function CounterObject(){
      const [UserData,setUserdata] = useState(
          {firstName:"",lastName:"",age:18})
      /* 
      by defalt firstName and lastName... is '' but when we start writing
      any one of them the other will vanish this is because useState doesnot
      automatically mearge and updates the object So, we use spread operater
      '...UserData,' by this we are spreading the pervious state and overwriting 
      the previous state with the new onces...
      */
      return(
          <div>
              <input type="text" value={UserData.firstName} onChange={e=>setUserdata({...UserData,firstName:e.target.value})}/>
              <input type="text" value={UserData.lastName} onChange={e=>setUserdata({...UserData,lastName:e.target.value})}/>
              <input type="number" value={UserData.age} onChange={e=>setUserdata({...UserData,age:e.target.value})}/>
              <p>Your inserted data is :</p>
              <ul>
                  <li>Your First Name : {UserData.firstName}</li>
                  <li>Your Last Name : {UserData.lastName}</li>
                  <li>Your Age : {UserData.age}</li>
              </ul>
          </div>
      )
  }
  ```
  > So, the setter function provided by the useState hooks doesnot automatically mearge and update object we have to do that manually

  if you want to see the JSON state then ```{JSON.stringfy(data)}```

  * ## useState hooks with array
  example: how to use hooks if state value is array we will understand by making a simple todo application
  ```js
  function todo(){
      const [item,setItem] = useState([])
      const [inputData,setInputData] = useState("")
      const addItem = (e) => {
          e.preventDefault()
          setItem([...item,{data:inputData,id:item.length}])
      }
      return(
          <div>
              <form onSubmit={addItem}>
                  <textarea value={inputData} onChange={e=>{setInputData(e.target.value)}}/>
                  <button type="submit">Add ToDo</button>
              </form>
              <p>Your ToDo</p>
              <ul>
                  {item.map(value=>(<li id={value.id}>{value.data}</li>))}
              </ul>
          </div>
      )
  }
  ```
  * ### Summary - useState()
    - the useState hook lets you add state to function component
    - in classes the state is an object
    - with the useState hooks, the state dosenot have to be an object
    - the useState hook returns an array with 2 elements
    - the first element is the current value of the state, and the second element is a state  setter function
    - new state value depends on the previous state value? you can pass a function to the setter function
    - when dealing with object/array always make sure to spread your state variable and then call the setter function

* ## useEffect
  * if we work with class component we have to some sideEffect components eg: update the DOM, fetching data from end points, setting up subscription or timmers sence the render method is to early to form side effect we use life cycle method
  * - Example 1 : updating the document title to the current counter value
      ```js
      componentDidMount(){
        // this will render only onces in component lifecycle
        document.title=`Clicked ${this.state.count}` //A1
      }
      componentDidUpdate(){
        // to update we stuffs when ever their will be a change
        document.title=`Clicked ${this.state.count}` //A2
      }
      ```
    - Example 2 : timmer, we well log hello every 5 sec. well create tis timmer in the class component will be removed from DOM
      ```js
      componentDidMount(){
        // this will render only onces in component lifecycle
        this.interval = setInterval(this.tick,1000) //B1
      }
      componentDidUpdate(){
        // to update we stuffs when ever their will be a change
        clearInterval(this.interval) //B2
      }
      ```
    - but when we see the same A1 and A2 code are repeated and they are together or split appart and the code reated to the timmer the code in B1 and B2 are related but kept in different code blocks (different lifecycle) and the A1 and B1 are completly unreated but still they are kept together
    * So, to solve this we have <b>useEffect</b> hooks
      1. the effect hook lets you perform side effects in function component
      2. it is a close replacement for componentDidMount, componentDidUpdate & componentWillUnmount
  
  * ### useEffect after render
    * for this example we will memic componentDidMount & componentDidUpdate but in function component using useEffect
    * we will make a code to counter and on every click will update the title
      - without useEffect hooks it was like
        1. create class
        2. create state
        3. create componentDidMount() for initial value
        4. create componentDidUpdate(prevProps,prevState)
        5. render
        6. onclick increment the state variable
      - with useEffect
        ```js
        function CounterOneEffect(){
            const [count,setCount] = useState(0)
            // we pass in a paremeter which is a function
            // which will get executed after every render of the component
            useEffect(()=>{
                document.title = `Clicked ${count}`
            })
            return(
                <div>
                    <button onClick={()=>setCount(count+1)}>Increment title</button>
                </div>
            )
        }
        ```
        > useEffect runs after every render of the component 
        
  * ### useEffect conditionally run effects
    - as we have seen that useEffect runs after every render of the component but if we want to run on some condition not every time then
    - it we see that last example without hooks and all one more we will add a input field the when ever we click button its render but its re-render in typing also which we dont want So, we just want to re-render whenever the button is clicked not typing in input field then \
    then without using Hooks
      ```js
      componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
          document.title =  `Clicked ${count}`
          console.log('Document title has updated')
        }
      }
      ```
    - but now using hooks
      ```js
      import React,{useState,useEffect} from 'react'

      function CounterTwoEffect(){
          const [count,setCount] = useState(0)
          const [name,setName] = useState('')

          useEffect(()=>{
              document.title =  `Clicked ${count}`
          },[count])

          return(
              <div>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                  <button onClick={()=>setCount(count+1)}>Increment title</button>
              </div>
          )
      }
      ```
      we will pass a 2nd parameter in useEffect which is an array and it we pass something in that array then it will compair the old value and new value and rerender

  * ### Run effect only onces 
    - means we will mimic ```componentDidMount()```, So we will pass 2nd parameter as a empty [] in useEffect
    - example:
      ```js
      function MouseThrEffect(){
          const [x,setX] = useState(0)
          const [y,setY] = useState(0)

          const logMousePosition = e =>{
              console.log("Mouse Event")
              setX(e.clientX)
              setY(e.clientY)
          }

          useEffect(()=>{
              console.log("MouseThrEffect is called")
              window.addEventListener('mousemove',logMousePosition)
          },[])// because of this [] it will run only onces

          return(
              <div>
                  <p>Mouse positon in this screen - X:{x},Y:{y}</p>
              </div>
          )
      }
      ```
  * ### useEffect with cleanup
    - we will memic ```componentWillUnmount()```, we 'return' a function which will run when component unmounts (whenever we 'return' its a cleanup function) 
    - Example: if i want to stop tracking the mouse
      ```js
      function EffectMouse(){
          const [x,setX] = useState(0)
          const [y,setY] = useState(0)

          const logMousePosition = e =>{
              console.log("Mouse Event")
              setX(e.clientX)
              setY(e.clientY)
          }

          useEffect(()=>{
              console.log("MouseFouEffect is called")
              window.addEventListener('mousemove',logMousePosition)
              return ()=>{
                  console.log("MouseFouEffect has unmount")
                  window.removeEventListener('mousemove',logMousePosition)
              }
          },[])

          return(
              <div>
                  <p>Mouse positon in this screen - X:{x},Y:{y}</p>
              </div>
          )
      }

      export function MouseFouEffect(){
          const [display,setDisplay] = useState(true)
          return(
              <div>
                  <button onClick={()=>setDisplay(!display)}>Unmount</button>
                  {display ? <EffectMouse/> : <p>Mouse Event has Unmount</p>}
              </div>
          )
      }
      ```
  * ### useEffect with incorrect dependency
    - we will take the mistake So, not required but 1 way has 2 tricks to do the same job
    - example: keep on counting every 1sec.
      ```js
      const tick() => {setCount(count+1)}
      useEffect(()=>{
        const interval = setInterval(tick,1000)
        return()=>{
          cleanInterval(interval)
        }
      },[count])
      ```
      or
      ```js
      const tick() => {setCount(pervState=>prevState+1)}
      useEffect(()=>{
        const interval = setInterval(tick,1000)
        return()=>{
          cleanInterval(interval)
        }
      },[])
      ```
    - to run multiple useEffect to run then make sure you suprate them out thather then having a code in single useEffect

  * ###  lets make a mini project to Fetch data with useEffect
    1. take the data fetch it and stop (render onces) [FetchOneuseEffect.js](demo/src/hookComponents/FetchOneuseEffect.js)
    2. we will fetch individual post by passing in the post id get request [FetchTwouseEffect.js](demo/src/hookComponents/FetchTwouseEffect.js)
    3. now we will add a button and using that button we will take the input value and then fetch data onClick [FetchThruseEffect.js](demo/src/hookComponents/FetchThruseEffect.js)

[Move to TOP](#Full-Stack_JS-React)

License Under : [MIT LICENSE](LICENSE)