import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
      .then(response => response.json())
      .then(users => this.setState({ monsters : users }))
      .catch(error => console.log(error))
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
          handleChange={e => this.setState({searchField : e.target.value})}
        />

        <CardList monsters={filteredMonsters}/>

      </div>
    )

  }

}

export default App;