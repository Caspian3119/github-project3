import React from 'react'; 
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Task = (props) => {
  const componentToShow = () => {
    if(props.status === "Done"){
      return (
        <div className="icons">
          <RiCloseCircleLine className = "delete-icon" onClick={() => props.deleteClick(props.id)} />
        </div>
      )
    } else if(props.status ==="Pending"){
      return(
        
        <div className="icons">
          <AiOutlineCheckCircle onClick={() => props.completeTask(props.id) }/>
          <RiCloseCircleLine className = "delete-icon" onClick={() => props.deleteClick(props.id)} />
          <TiEdit className="edit-icon" onClick={() => props.editClick(props.id)}/>
        </div>
      )
      
    }else {
      return <div></div>
    }
  }
    return (
      <div className="Task">
        {componentToShow()}
        <p className="task-name">{props.name}</p> 
        <p className="task-status">Status: {props.status}</p>
      </div>
    )
  }

export default Task