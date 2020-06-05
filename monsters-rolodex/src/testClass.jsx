import React, { Component } from 'react'

class TestClass extends Component {

    constructor() {
        super()

        this.state = {
            monsters: [],
            string: 'Vinicius'
        }
    }

    componentDidMount() {
        let url = 'https://jsonplaceholder.typicode.com/users'

        fetch(url)
            .then(response => response.json())
            .then(users => this.setState({monsters : users}))
            .catch(error => console.log(error))
    }

    render(){
        return (

            <div>
                <p>Hello my name is {this.state.string}</p>

                <button onClick={() => this.setState({string: 'Suiciniv'})}>My name backwards</button>

                <ul>
                    {this.state.monsters.map(monster => <li key={monster.id}>{monster.name}</li>)}
                </ul>
            </div>
    
        )
    }
}

export default TestClass