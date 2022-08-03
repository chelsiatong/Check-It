import react, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <div>
                    <label>task name title</label>
                    <input type="text" value={taskName} onChange={handleChange} name="taskName"></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description} onChange={handleChange} name="description"></textarea>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggle} >cancel</Button>{''}
                <Button onClick={handleSave} >create</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateTaskModal;