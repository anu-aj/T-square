import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  let [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState(
    [{
        id: 1,
        text: 'bleh',
        day: '5/10/11',
        reminder: true,
    },
    {
        id: 2,
        text: 'bleh',
        day: '5/10/11',
        reminder: true,
    },
    {
        id: 3,
        text: 'bleh',
        day: '5/10/11',
        reminder: false,
    },]
)
// Addd Task
const addTask= (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
  console.log(id)
}


  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {
      tasks.length >0 ? <Tasks tasks= {tasks}  onDelete={deleteTask} onToggle={toggleReminder} /> : "All Caught Up!"
      }
    </div>
  );
}

export default App
