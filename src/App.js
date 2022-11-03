import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import TaskPage from "./components/TaskPage";
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const initialTasks = [
    {
      id: uuidv4(),
      name: "Fix Bed",
      status: "Pending",
    },
    {
      id: uuidv4(),
      name: "Walk dog",
      status: "Pending",
    },
    {
      id: uuidv4(),
      name: "Clean bathroom",
      status: "Done",
    },
    {
      id: uuidv4(),
      name: "Clean PC",
      status: "Done",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [editTask, setEditTask] = useState({
    id: "",
    name: "",
    status: "Pending"
  }); 

  //Function for checking/completing the tasks
  const completeTaskHandler = (id) => {
    let newState = [...tasks];
    const index = newState.findIndex((task) => task.id === id);
    newState[index].status = "Done";
    setTasks(newState);
  };
  
  //Edit button function
  const handleEditClick = (id) => {
    const indexOfItem = tasks.findIndex((task) => task.id === id);
    const editTask = tasks[indexOfItem];
    setNewTask(true)
    setEditForm(true);
    setEditTask(editTask);
  };

  //Delete button function
  const handleDeleteClick = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  //Cancel button function
  const cancelEditTask = () => {
    setEditForm(false);
  };

  //Function for editing the current task selected
  const editCurrTask = (editedTask) => {
    const indexOfItem = tasks.findIndex((task) => task.id === editedTask.id);
    const newTask = [...tasks]
    newTask.splice(indexOfItem, 1, editedTask);
    setTasks(newTask);
    setEditForm(false)
  };

  //Function for adding a new task
  const addTask = (addTask) => {
    const newTasks = {
      id: uuidv4(),
      ...addTask,
    };
    const checkDup = tasks.filter((task) => task.name.toLowerCase().trim().replace(/[^\w\s]/gi, "") === newTasks.name.toLowerCase().trim().replace(/[^\w\s]/gi, ""))
    if(checkDup.length <= 0 && newTask.name !== ""){
      if(newTasks.name === ""){
        alert("Please Input a Task")
      }
      else{
        const newTask = [...tasks, newTasks];
        setTasks(newTask)
        setNewTask(false)
      }
    }
    else{
      alert("Task is already existing")
    }
  };

  return (
    <div className="App">
      <p className="title">Tasks For Today</p>

      {
         addTask ?
         <AddTask submit={ addTask } /> :
         ""
      }

      {
        editForm ? 
        <EditTask submit={editCurrTask} cancel={cancelEditTask} {...editTask} /> : 
        ""
      }

      <nav>
        <Link to="" className="nav-link">All Tasks</Link> |
        <Link to="Done" className="nav-link"> Done Tasks</Link> |
        <Link to="Pending" className="nav-link"> Pending Tasks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} completeTask={completeTaskHandler}  deleteClick = {handleDeleteClick} editClick={handleEditClick}/>} />
        <Route path=":status"element={<TaskPage tasks={tasks} completeTask={completeTaskHandler}  deleteClick = {handleDeleteClick} editClick={handleEditClick}/>}/>
      </Routes>
    </div>
  );
};

export default App;
