import React, { useEffect, useState } from 'react';
import '../createtask/createtask.scss';
// import { useHistory } from 'react-router-dom';


function EditTaskModal({ modal, toggle, updateTask, taskObj }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        let tempObj = {};
        tempObj["Name"] = taskName;
        tempObj["Description"] = description;
        updateTask(tempObj);
    }

    // let history = useHistory();
    // function handleClick() {
    //     history.push('http://localhost:3000/todo');
    // }

    // const handleDouble = () => {
    //     handleUpdate();
    //     handleClick();
    // }

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    }, [taskObj]);

    return (
        <section className="modal">
            <div className="modal__section" >
                <div className="modal__header" >Update Task</div>
                <div>
                    <div className="modal__container">
                        <div className="modal__head" >
                            <label className="modal__head--title" >Task</label>
                            <input className="modal__head--text" type="text" value={taskName} onChange={handleChange} name="taskName"></input>
                        </div>
                        <div className="modal__detail">
                            <label className="modal__detail--title" >Description</label>
                            <textarea className="modal__detail--text" value={description} onChange={handleChange} name="description"></textarea>
                        </div>
                    </div>
                </div>
                <div className="modal__buttons">
                    <button className="modal__buttons--click" onClick={toggle} >cancel</button>
                    {/* <button className="modal__buttons--click" onClick={() => { handleUpdate(); handleClick(); }}  >update</button> */}
                    <button className="modal__buttons--click" onClick={handleUpdate}  >update</button>
                </div>
            </div>
        </section>
    );

}

export default EditTaskModal;