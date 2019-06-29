import React from 'react';
import './App'

class ListAppointment extends React.Component{

    render(){

        const listItems = this.props.appointments.map(item => (
            <div>
                {item.title}
            </div>
        ))

        return(
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                     <div className="pet-item col media py-3 card" key={item.aptId}>
                        
                            <div className="mr-3">
                                <button className="pet-delete btn btn-sm btn-danger">X</button>
                            </div>
            
                            <div className="pet-info media-body">
                                <div className="pet-head d-flex">
                                <span className="pet-name">{item.title}</span>
                                <span className="apt-date ml-auto">{item.date}</span>
                            </div>
            
                            <div className="owner-name">
                                <span className="label-item"> {item.place} </span>
                                <span>ownerName</span>
                                </div>
                                <div className="apt-notes">aptNotes</div>
                            </div>
                      </div>
                ))}
               
             </div>
        )
    }
}

export default ListAppointment;