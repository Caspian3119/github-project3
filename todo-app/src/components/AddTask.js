import React, {useState} from 'react'

const NewTask = (props) => {
  const [task,setTask] = useState({
    name: "",
    status: "Pending",
  })

  const onChange = (e) => {
    const inputName = e.target.name

    switch(inputName){
      case 'name':
        setTask({
          ...task, 
          name: e.target.value
        })
        break;

      default:
        break;
    }
  }

  const onSubmitTask = (e) => {
    e.preventDefault()
    props.submit(task)
  }

  return (
    <div className = "form">
        <form className="add-task">
            <input className = "add-input" name = "name" type = "text" onChange = {onChange}/>
            <button className="button-submit" onClick={onSubmitTask}>Submit</button>
        </form>
    </div>
  )
}

export default NewTask