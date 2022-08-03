import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    }, []);

    return (
        <Modal className="modal" isOpen={modal} toggle={toggle}>
            <ModalHeader className="modal__header" toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <div className="modal__container">
                    <div className="modal__head" >
                        <label className="modal__title" >task name title</label>
                        <input className="modal__text" type="text" value={taskName} onChange={handleChange} name="taskName"></input>
                    </div>
                    <div>
                        <label className="modal__description" >Description</label>
                        <textarea className="modal__text" value={description} onChange={handleChange} name="description"></textarea>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button className="modal__cancel" onClick={toggle} >cancel</Button>{''}
                <Button className="modal__create" onClick={handleUpdate} >update</Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditTaskModal;