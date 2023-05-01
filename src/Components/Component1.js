import React,{Component} from "react"
import "./Components.css"

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <div className="ss">
                    <h1 className="htext">This is using Class Component</h1>
                    <p className="ptext1">this is done using external css</p><br/>
                    <p className="ptext2">this is done using inline css</p>
                </div>
            </div>
        )
    }
}
export default ClassComponent



