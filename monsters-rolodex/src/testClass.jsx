import React, { Component } from 'react'

class TestClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            test: - 1 + this.props.increment
        }

        this.props = props
    }

    componentDidMount() {}

    handleClick = () => {
        // Async
        this.setState({test : this.state.test + 1})
    }

    handleClickBestPractice = () => {
        this.setState((prevState, prevProps) => {
            return {test: prevState.test + prevProps.increment}
        },
        () => console.log(this.state)
    )}

    render(){
        return (

            <div>
                <h1>{this.state.test}</h1> 

                <button onClick={this.handleClick}>Update State</button>
            </div>
    
        )
    }
}

export default TestClass