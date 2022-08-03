import React, { useState } from 'react';
import './createtask.scss';

function CreateTaskModal({ modal, toggle, save }) {
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

    const handleSave = (event) => {
        event.preventDefault();
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        save(taskObj);
    }

    return (
        <section className="modal">
            <div className="modal__section">
                <div className="modal__header">Create Task</div>
                <div>
                    <div className="modal__container">
                        <div className="modal__head" >
                            <label className="modal__head--title" >Task</label>
                            <textarea className="modal__head--text" type="text" value={taskName} onChange={handleChange} name="taskName"></textarea>
                        </div>
                        <div className="modal__detail" >
                            <label className="modal__detail--title" >Description</label>
                            <textarea className="modal__detail--text" value={description} onChange={handleChange} name="description"></textarea>
                        </div>
                    </div>
                </div>
                <div className="modal__buttons" >
                    <button className="modal__buttons--click" onClick={toggle}>Cancel</button>
                    <button className="modal__buttons--click" onClick={handleSave} >Create</button>
                </div>
            </div>
        </section>
    );

}

export default CreateTaskModal;