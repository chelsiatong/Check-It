import './notes.scss';
import SideNotes from '../sidenotes/sidenotes';
import MainNotes from '../mainnotes/mainnotes';
import React from 'react';

class Notes extends React.Component {
    render() {

        return (
            <section className="notes" >
                <div>
                    <SideNotes />
                    <MainNotes />
                </div>

            </section>
        );
    }

}

export default Notes;