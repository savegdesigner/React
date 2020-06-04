import React, { Component } from 'react'

class TestClass extends Component {

    constructor() {
        super()

        this.state = {
            string: 'Vinicius'
        }
    }

    render(){
        return (

            <div>
                <p>Hello my name is {this.state.string}</p>

                <button onClick={() => this.setState({string: 'Suiciniv'})}>My name backwards</button>
            </div>
    
        )
    }
}

export default TestClass