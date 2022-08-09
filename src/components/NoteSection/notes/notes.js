import './notes.scss';
import uuid from "react-uuid";
import SideNotes from '../sidenotes/sidenotes';
import MainNotes from '../mainnotes/mainnotes';
import React, { useEffect, useState } from 'react';

function Notes() {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []);

    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "",
            body: "",
            time: Date.now(),
        };
        setNotes([newNote, ...notes]);
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote) {
                return updatedNote;
            }
            return note;
        });
        setNotes(updatedNotesArray);
    }

    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete));
    };
    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    };

    return (
        <section className="notes" >
            <div className="notes__container" >
                <div>
                    <SideNotes notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
                </div>
                <div className="notes__main" >
                    <MainNotes activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
                </div>
            </div>

        </section>
    );
}

export default Notes;