import './sidenotes.scss';


function SideNotes({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {

    const sortedNotes = notes.sort((a, b) => b.time - a.time)

    return (
        <section className="side-notes">
            <div className="side-notes__header">
                <button className="side-notes__add" onClick={onAddNote} >+</button>
                <div className="side-notes__notes" >

                    {notes.map((note) => (
                        <div className={`side-notes__note ${note.id === activeNote && "side-notes__note--active"}`} onClick={() => setActiveNote(note.id)} >
                            <div className="side-notes__title">
                                <h4 className="side-notes__label" placeholder="test" >{note.title && note.body.substr(0, 20) + "..."}</h4>
                                <button className="side-notes__delete" onClick={() => onDeleteNote(note.id)} >x</button>
                            </div>
                            <h5 className="side-notes__preview" >{note.body && note.body.substr(0, 20) + "..."}</h5>
                            <p className="side-notes__time">{new Date(note.time).toLocaleDateString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
                        </div>
                    ))}

                </div>
            </div>

        </section>

    )

}

export default SideNotes;