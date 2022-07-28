import './mainnotes.scss';


function MainNotes() {
    return (
        <section className="main-notes">
            <div className="main-notes--edit" >
                <input className="main-notes--edit__title" type="text" id="title" placeholder="What do you want to name me?" autoFocus />
                <textarea className="main-notes--edit__body" id="body" placeholder="What's on your mind?" />
            </div>
            <div className="main-notes__preview" >
                <h3 className="main-notes__preview--title" >Title</h3>
                <div className="main-notes__preview--body" >Note Preview</div>
            </div>

        </section>

    )

}

export default MainNotes;