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

License Under : [MIT LICENSE](LICENSE)