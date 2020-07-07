import React, { useState, Component } from 'react'
import './Calculator.scss'

import Button from '../button/Button'
import Display from '../display/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

        this.state = {...initialState}
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(d) {
        if(d === '.' && this.state.displayValue.includes('.'))
            return
        
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay  

        const currentValue = clearDisplay ? '' : this.state.displayValue

        const displayValue = currentValue + d

        this.setState({displayValue, clearDisplay: false}) 
            
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }

}

export default Calculator