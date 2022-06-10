import React, {useState} from 'react'
import '../App.css'

const ToDoList = () => {
    const[task, setTask] = useState(() =>{
        let myList = localStorage.getItem('task');
        return myList ? JSON.parse(myList) : [];
    })

    // create
    const addTask = (e) =>{
        // prevents browser from refreshing
        e.preventDefault();
        setTask([...task, {taskNum:e.target.taskNum.value}])
        e.target.taskNum.value = ""
    }
    
    //delete
    const deleteTask = (taskDelete) =>{
        let newTask = task.filter((a) =>(taskDelete !== a))
        setTask(newTask)
    }
    
    //checkbox (TODO: fix checkbox)
    const checkBoxed = (idx) =>{
        let newTask = [...task]
        newTask[idx].checkedBox = !newTask[idx].checkedBox 
        setTask(newTask)
    }
    
    return (
    <div className='center'>
        {/* FORM */}
        <form onSubmit={addTask}>
            <label>Add task:</label>
            {/* TODO: double bind this */}
            <input name="taskNum" /> 
            <button className='add-btn'>Add</button>
        </form>
        {/* INPUT + CHECKBOX */}
        <div className='margin-left'>
            {task.map((a,idx) =>
            <h3 className='d-flex' key={idx}>
                <input type="checkbox" onClick={() => checkBoxed(idx)} checked={a.checkedBox} />
                {/* John helped with showing line-through ONLY when he checkbox
                    is clicked; used inline styling. (code below)
                */}
                <p style={{textDecoration: a.checkedBox ? 'line-through' : 'none'}}>{a.taskNum}</p>
                <button onClick={() => deleteTask(a)} className="delete-btn">Delete</button>
            </h3>)}
        </div>
    </div>
    )
}

export default ToDoList