import './sidenotes.scss';


function SideNotes() {
    return (
        <section className="side-notes">
            <div className="side-notes__header">
                <button className="side-notes__add" >+ sdfgsfgsasdfadsfadsfadffd</button>
                <div className="side-notes__notes" >
                    <div className="side-notes__note" >
                        <div className="side-notes__title">
                            <h4>Title</h4>
                            <button className="side-notes__delete" >-</button>
                        </div>
                        <h5>note preview</h5>
                        <p className="side-notes__time">last modified time</p>
                    </div>
                </div>
            </div>

        </section>

    )

}

export default SideNotes;