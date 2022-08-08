import './mainnotes.scss';
import ReactMarkdown from "react-markdown";


function MainNotes({ activeNote, onUpdateNote }) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            time: Date.now(),
        });
    };

    if (!activeNote) return <div className="not-selected">Please select a note</div>;

    return (
        <section className="main-notes">
            <div className="main-notes__edit" >
                <input className="main-notes__edit--title" type="text" id="title" placeholder="Name me!" value={activeNote.title} onChange={(event) => onEditField("title", event.target.value)} autoFocus />
                <textarea className="main-notes__edit--body" id="body" placeholder="What's on your mind?" value={activeNote.body} onChange={(event) => onEditField("body", event.target.value)} />
            </div>
            <div className="main-notes__preview" >
                <h3 className="main-notes__preview--title" >{activeNote.title}</h3>
                <ReactMarkdown className="main-notes__preview--body" >{activeNote.body}</ReactMarkdown>
            </div>

        </section>

    )

}

export default MainNotes;