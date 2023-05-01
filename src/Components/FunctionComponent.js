import React from "react"
import "./Components.css"
// production build ==> npm run build 
let Functioncomponent = () =>{
    console.log("ggg");
    return(
        <div>
            <div className="ss">
                    <h1 className="htext">This is using functional component</h1>
                    <p className="ptext1">this is done using external css</p><br/>
                    <p className="ptext2">this is done using inline css</p>
                </div>
            </div>
    )
}
export default Functioncomponent