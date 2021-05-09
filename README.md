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


License Under : [LICENSE](LICENSE)