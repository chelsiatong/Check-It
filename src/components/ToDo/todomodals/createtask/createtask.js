import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
        <Modal className="modal" isOpen={modal} toggle={toggle}>
            <ModalHeader className="modal__header" toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <div className="modal__container">
                    <div className="modal__head" >
                        <label className="modal__title" >Task</label>
                        <input className="modal__text" type="text" value={taskName} onChange={handleChange} name="taskName"></input>
                    </div>
                    <div>
                        <label className="modal__description" >Description</label>
                        <textarea className="modal__text" value={description} onChange={handleChange} name="description"></textarea>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button className="modal__cancel" onClick={toggle} >cancel</Button>
                <Button className="modal__create" onClick={handleSave} >create</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateTaskModal;