import React,{Component} from "react"
import { DetailComp } from './Detail'

export default class Stateaprop extends Component{
    constructor(){
        super()
        this.state = {
            name:"sachin Sharma",
            age: 15
        }
        this.state.occupation = "Web Developer"
    }
    handleChangeName = () =>{
        this.setState({
            name: "sara tendulkar",
            age: 25,
            occupation: "software engineer"})
            console.log("State of stateprop", this.state.occupation);
    }
    render(){
        console.log("State of stateprop", this.state, this.occupation);
        return(
            <div>
                <h1>My Introduction</h1>
                <p>My name: {this.state.name}</p>
                <p>My age: {this.state.age}</p>
                <p>My occupation : {this.state.occupation}</p>
                <button onClick={this.handleChangeName}>Change name</button>
                <DetailComp nameProp={this.state.name}/>
            </div>
        )
    }
}