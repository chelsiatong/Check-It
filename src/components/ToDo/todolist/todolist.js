import './todolist.scss';
import React, { useState, useEffect } from 'react';
import ToDoCard from '../todocard/todocard';
import CreateTaskModal from '../todomodals/createtask/createtask';
// import { useHistory } from 'react-router-dom';


function ToDoList() {
    const [modal, setModal] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let array = localStorage.getItem("tasks");
        if (array) {
            let object = JSON.parse(array);
            setTasks(object);
        };
    }, [])

    const deleteTask = (index) => {
        let temporary = tasks;
        temporary.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(temporary));
        setTasks(temporary);
        window.location.reload();
    }

    // let history = useHistory();
    // function handleClick() {
    //     history.push('http://localhost:3000/todo');
    // }

    // const handleDouble = () => {
    //     deleteTask();
    //     handleClick();
    // }

    const updateListArr = (object, index) => {
        let temporary = tasks;
        temporary[index] = object;
        localStorage.setItem("tasks", JSON.stringify(temporary));
        setTasks(temporary);
        window.location.reload();
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let temporary = tasks;
        temporary.push(taskObj);
        localStorage.setItem("tasks", JSON.stringify(temporary));
        setTasks(tasks);
        setModal(false);
    }
    return (
        <section className="todo">
            <div className="todo__header" >
                <h1 className="todo__title" >ToDo</h1>
                <button className="todo__add" onClick={() => setModal(true)}>&#x2b;</button>
            </div>
            <div className="todo__container">
                {tasks && tasks.map((object, index) => <ToDoCard taskObj={object} index={index} deleteTask={deleteTask} updateListArr={updateListArr} />)}
            </div>
            {modal !== false && <CreateTaskModal toggle={toggle} save={saveTask} />}
        </section>
    );
}

export default ToDoList;