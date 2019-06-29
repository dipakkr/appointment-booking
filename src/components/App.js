import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import AddAppointment from './AddAppointment';
import SearchAppointment from './SearchAppointment';
import ListAppointment from './ListAppointment';
// import Data from '../../public/data.json'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      myAppointments : [],
      lastIndex : 0
    }
  }

  componentDidMount(){
    fetch('http://api.frontbench.xyz/hackathons')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({lastIndex : this.state.lastIndex + 1});
          return item;
        })
        this.setState({
          myAppointments : apts
        })
      })
  }

  render(){
  
    return(
      <div className="App">
        <div className="App-header">
              
              <AddAppointment/>
              <SearchAppointment/>
              <ListAppointment appointments={this.state.myAppointments}/>

        </div>
      </div>
    )
  }
}

export default App;
