import React, {useState} from 'react'

const EditItemForm = ({submit, id, cancel, name}) => {

  const [task,setTask] = useState({
    id: id,
    name: name,
    status: "Pending"
  })

  const [valueName, setValueName] = useState(name);
  
  const onChange = (e) => {
    const inputName = e.target.name;

    switch (inputName) {
      case "name":
        setValueName(e.target.value);
        setTask({
          ...task,
          name: e.target.value,
        });
        break;

        default:
        break;
    }
  };

  const onEditTask = (e) => {
    e.preventDefault();
    submit(task);
  };

  const onCancelEdit = (e) => {
    e.preventDefault();
    cancel(false);
  };
 
  return (
    <div className= "form">
        <form>
          <input className = "add-input"name="name" type="text" value={valueName} onChange={onChange} />
          <br />
          <div className="formButtons">
            <button className="button-save" onClick={onEditTask}>Save</button>
            <button className="button-cancel" onClick={onCancelEdit}>Cancel</button>
          </div>

        </form>
    </div>
  )
}

export default EditItemForm