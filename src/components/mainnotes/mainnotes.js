import './mainnotes.scss';


function MainNotes() {
    return (
        <section className="main-notes">
            <div className="main-notes--edit" >
                <input className="main-notes--title" type="text" id="title" placeholder="What do you want to name me?" autoFocus />
                <textarea className="main-notes--body" id="body" placeholder="What's on your mind?" />
            </div>
            <div className="main-notes__preview" >
                <h2 className="main-notes__preview--title" >Title</h2>
                <div className="main-notes__preview--body" >Note Preview</div>
            </div>

        </section>

    )

}

export default MainNotes;