import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import PropTypes from 'prop-types';
import ErrorBoundary from "../ErrorBoundary";

export default function NotePageMain(props) {
  return (
    <ErrorBoundary>
    <section className='NotePageMain'>
      <Note
        id={props.note.id}
        name={props.note.note_name}
        modified={props.note.date_modified}
      />
      <div className='NotePageMain__content'>
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
    </ErrorBoundary>
  )
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}

NotePageMain.propTypes = {
  note: PropTypes.object.isRequired
};

