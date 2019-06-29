import React from 'react';
import './App';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointment extends React.Component{

    render(){

       

        return(
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                     <div className="pet-item col media py-3 card" key={item.aptId}>
                        
                            <div className="mr-3">
                                <button className="pet-delete btn btn-sm btn-danger"
                                    onClick={()=> this.props.deleteAppointment(item)}> 
                                <FaTimes/>
                                </button>
                            </div>
            
                            <div className="pet-info media-body">
                                <div className="pet-head d-flex">
                                <span className="pet-name"><b>{item.petName}</b></span>
                                <span className="apt-date ml-auto"> 
                                    <Moment
                                        date={item.aptDate}
                                        parse="YYYY-MM-dd hh:mm"
                                        format='MMM D, h:mma'
                                    />
                                </span>
                            </div>
            
                            <div className="owner-name">
                                <span className="label-item"> {item.place} </span>
                                <span>{item.ownerName}</span>
                                </div>
                                <div className="apt-notes">{item.aptNotes}</div>
                            </div>
                      </div>
                ))}
               
             </div>
        )
    }
}

export default ListAppointment;