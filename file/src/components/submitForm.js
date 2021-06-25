import React,{Component} from 'react'

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

export default MainForm;