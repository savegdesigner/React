import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'
import TestClass from './testClass';
import LifeCycle from './testOtherClass'

class App extends Component {

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: '',
      text: '',
      showChild: true
    }

    // Arrow functions take over this
    // this.handleChange = this.handleChange.bind(this)

  }

  // LifeCycle method
  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
      .then(response => response.json())
      .then(users => this.setState({ monsters : users }))
      .catch(error => console.log(error))
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  render(){

    let { monsters, searchField } = this.state
    let filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className="App">

        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}/>

        {/* <TestClass increment={1}/> */}

        {/* <button onClick={() => { this.setState({showChild: !this.state.showChild}) }}>Toggle Lifecycles</button>

        <button onClick={() => this.setState({text: this.state.text + '_text'})}>Add Text</button>

        {this.state.showChild ? <LifeCycle text={this.state.text}/> : null} */}

      </div>
    )

  }

}

export default App;