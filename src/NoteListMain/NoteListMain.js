import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import PropTypes from 'prop-types';
export default function NoteListMain(props) {
  return (
    <section className='NoteListMain'>
      <ul>
        {props.notes.map(note =>
          <li key={note.id}>
            <Note
              id={note.id}
              name={note.note_name}
              modified={note.date_modified}
            />
          </li>
        )}
      </ul>
      <div className='NoteListMain__button-container'>
        <CircleButton
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteListMain__add-note-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Note
        </CircleButton>
      </div>
    </section>
  )
}

NoteListMain.defaultProps = {
  notes: [],
}


NoteListMain.propTypes = {
  notes: PropTypes.array.isRequired
};