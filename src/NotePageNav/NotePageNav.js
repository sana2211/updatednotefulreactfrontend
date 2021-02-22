import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './NotePageNav.css'
import PropTypes from 'prop-types';
import ErrorBoundary from "../ErrorBoundary";

export default function NotePageNav(props) {
  return (
    <ErrorBoundary>
    <div className='NotePageNav'>
      <CircleButton
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
        className='NotePageNav__back-button'
      >
        <FontAwesomeIcon icon='chevron-left' />
        <br />
        Back
      </CircleButton>
      {props.folder && (
        <h3 className='NotePageNav__folder-name'>
          {props.folder.folder_name}
        </h3>
      )}
    </div>
    </ErrorBoundary>
  )
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}

NotePageNav.propTypes = {
  history: PropTypes.object.isRequired,
  folder: PropTypes.array
};