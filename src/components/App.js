import React from 'react';
import AddAppointment from './AddAppointment';
import SearchAppointment from './SearchAppointment';
import ListAppointment from './ListAppointment';
import { without } from 'lodash';
import '../css/App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      myAppointments : [],
      lastIndex : 0,
      formDisplay : false,
      orderBy : 'ownerName',
      orderDir : 'asc',
      queryText : 'has'
    };

    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
  }

  changeOrder(order, dir){
    this.setState({
      orderBy : order, 
      orderDir : dir
    });
  }

  addAppointment(apt){
    let tempApt = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;

    tempApt.unshift(apt);

    this.setState({
      myAppointments : tempApt,
      lastIndex : this.state.lastIndex + 1
    })
  }

  toggleForm(){
    this.setState({
      formDisplay : !this.state.formDisplay
    })
  }

  deleteAppointment(apt){
    let tempApt = this.state.myAppointments;
    tempApt = without(tempApt, apt); // Return the record without the 

    this.setState({
      myAppointments : tempApt
    })
  }

  componentDidMount(){
    fetch('https://api.myjson.com/bins/fw637')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({lastIndex : this.state.lastIndex +1})
          return item;
        })
        this.setState({
          myAppointments : apts
        })
      })
  }

  render(){

    let order;
    let filteredApts = this.state.myAppointments;

    if(this.state.orderDir === 'asc'){
      order = 1;
    }else{
      order = -1;
    }

    filteredApts = filteredApts.sort((a, b) => {
      if(a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()){
        return -1* order;
      }else{
        return 1 * order;
      }
    }).filter(eachItem=> {
      return(
        eachItem['petName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['ownerName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['aptNotes']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
      );
    })

  
    return(
      <div className="App">
        <div className="App-header">
              
              <AddAppointment 
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addAppointment={this.addAppointment}/>

              <SearchAppointment
                orderBy={this.state.orderBy}
                orderDir={this.state.orderDir}
                changeOrder={this.changeOrder}
              />

              <ListAppointment 
                  appointments={filteredApts}
                  deleteAppointment={this.deleteAppointment}/>

        </div>
      </div>
    )
  }
}

export default App;
