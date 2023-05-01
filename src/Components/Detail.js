import React from "react"

export class DetailComp extends React.Component{
    render(){
        console.log(("props of detailComp", this.props));
        return(
            <div>
                <h2>Detail = </h2>
                <p>Name prop value : {this.props.nameProp}</p>
            </div>
        )
    }
}