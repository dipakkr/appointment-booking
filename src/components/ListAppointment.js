import React from 'react';
import './App';
import { FaTimes, FaRegFrown } from 'react-icons/fa';
import Moment from 'react-moment';
import '../css/App.css';

class ListAppointment extends React.Component{

    render(){

        if((this.props.appointments.length === 0)){
           return(
               <div className="not-found">
                        <FaRegFrown/>
                        <h3> No Active Appointments !</h3>
                       
               </div>
           )
        }else{
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
                                    <span 
                                        className="pet-name" 
                                        contentEditable 
                                        suppressContentEditableWarning
                                        onBlur={
                                            e => this.props.updateInfo(
                                                'petName', 
                                                 e.target.innerText, // Inner Value
                                                 item.aptId // Find the proper record
                                                ) 
                                            }
                                        > 
                                        {item.petName} 
                                    </span>
                                    <span className="apt-date ml-auto"> 
                                        <Moment
                                            date={item.aptDate}
                                            parse="YYYY-MM-dd hh:mm"
                                            format='MMM D, h:mma'
                                        />
                                    </span>
                                </div>
                
                                <div className="owner-name">
                                    <span className="label-item"
                                        contentEditable 
                                        suppressContentEditableWarning
                                        onBlur={
                                            e => this.props.updateInfo(
                                                'ownerName', 
                                                e.target.innerText, 
                                                item.aptId
                                                ) 
                                            }
                                        > 
                                        {item.place} 
                                    </span>
                                    <span>{item.ownerName}</span>
                                 </div>
                                 <div className="apt-notes"
                                        contentEditable 
                                        suppressContentEditableWarning
                                        onBlur={
                                            e => this.props.updateInfo(
                                                'aptNotes', 
                                                e.target.innerText, 
                                                item.aptId
                                                ) 
                                            }
                                      >
                                      {item.aptNotes}
                                    </div>
                                </div>
                          </div>
                    ))}
                   
                 </div>
            )
        }
    }
}

export default ListAppointment;