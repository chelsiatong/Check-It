import React, { useState } from "react";
import EditTask from '../todomodals/edittask/edittask';
import './todocard.scss';

function ToDoCard({ taskObj, index, deleteTask, updateListArr }) {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (object) => {
        updateListArr(object, index);
    }

    const handleDelete = () => {
        deleteTask(index);
    }

    return (
        <>
            <div className="card">
                <span className="card__head">{taskObj.Name && taskObj.Name.substr(0, 20) + "..."}</span>
                <p className="card__description">{taskObj.Description && taskObj.Description.substr(0, 80) + "..."}</p>
                <div className="card__buttons" >
                    <button className="card__button" onClick={() => setModal(true)}>Edit</button>
                    <button className="card__button" onClick={handleDelete} >Delete</button>
                </div>
            </div>
            {modal && <EditTask toggle={toggle} updateTask={updateTask} taskObj={taskObj} />}
        </>
    )
}

export default ToDoCard;