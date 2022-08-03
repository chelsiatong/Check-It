import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
            <div className="modal__section" isOpen={modal} toggle={toggle}>
                <div className="modal__header" toggle={toggle}>Create Task</div>
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
                    <button className="modal__buttons--click" onClick={toggle} >Cancel</button>
                    <button className="modal__buttons--click" onClick={handleSave} >Create</button>
                </div>
            </div>
        </section>
    );

    // return (
    //     <section className="modal">
    //         <Modal className="modal__section" isOpen={modal} toggle={toggle}>
    //             <ModalHeader className="modal__header" toggle={toggle}>Create Task</ModalHeader>
    //             <ModalBody>
    //                 <div className="modal__container">
    //                     <div className="modal__head" >
    //                         <label className="modal__title" >Task</label>
    //                         <input className="modal__text" type="text" value={taskName} onChange={handleChange} name="taskName"></input>
    //                     </div>
    //                     <div>
    //                         <label className="modal__description" >Description</label>
    //                         <textarea className="modal__text" value={description} onChange={handleChange} name="description"></textarea>
    //                     </div>
    //                 </div>
    //             </ModalBody>
    //             <ModalFooter>
    //                 <Button className="create-modal__cancel" onClick={toggle} >Cancel</Button>
    //                 <Button className="create-modal__create" onClick={handleSave} >Create</Button>
    //             </ModalFooter>
    //         </Modal>
    //     </section>
    // );
}

export default CreateTaskModal;