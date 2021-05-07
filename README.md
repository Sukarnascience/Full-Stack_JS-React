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
        1. Stateless Functional Component
        2. Stateful Class Component

example for Stateless Functional Component : \
``` js
function welcome(props){
    return <h1> Hello, {props.name} </h1>;
}
```

example for Stateful Class Component : \
```js
class welcome extends React.Component(){
    render(){
        return <h1> Hello, {props.name} </h1>;
    }
}
```

License Under : [LICENSE](LICENSE)