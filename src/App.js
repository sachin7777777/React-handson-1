// import logo from './logo.svg';
import React, {Component} from "react"
import './Components/Components.css';
import ClassComponent from "./Components/Component1"
import Functioncomponent from "./Components/FunctionComponent"
import Stateaprop from "./Components/StateProp"

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      showFunctionComponent : false,
      showClassComponent: false,
    }
  }
  toggleFunComp = () =>{
    this.setState((prevstate) =>({
      showFunctionComponent : !prevstate.showFunctionComponent,
    }))
  }
  
  toggleClassComp = () =>{
    this.setState((prevstate) =>({
      showClassComponent : !prevstate.showClassComponent,
    }))
  }

  render(){
    return(
      <div className='main'>
      <h1 className="tophead">Styling using Functional & Class Component</h1>
      <div className='container'>
      <button className="para2" onClick={this.toggleFunComp}>To see styling in functional Component</button>
      <button className="para1" onClick={this.toggleClassComp}>To see styling in Class Component </button>
      </div>
      <div className="container1">
      {this.state.showFunctionComponent && <Functioncomponent/>}
      {this.state.showClassComponent && <ClassComponent/>}
      </div>
      {/* <Stateaprop/> */}
    </div>
    )
  }
}

export default App
