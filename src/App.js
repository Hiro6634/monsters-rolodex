import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(()=>{
        return({monsters: users})
      }))
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value.toLocaleLowerCase()
    });
  };

  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
        <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange}/>
        <CardList monsters={filteredMonsters}/>
     </div>
    );
  }
}

export default App;
