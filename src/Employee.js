import React, { Component } from 'react'

export default class Employee extends Component {
          constructor(props){
              super(props)
               this.state={
                   name:"udhay",
                   Employee:[
                       {name:"akhil"},
                       {name:"chaitu"}
                   ]
               }
          }
    
    render() {

         setTimeout(()=>
             this.setState({name:"kalyani"}),5000)
    
        return (
            <div>

                <h1>{this.state.Employee[1].name}</h1>
                <h2>
                {this.state.name}
                
                </h2>

            </div>
        )
        }
    }
