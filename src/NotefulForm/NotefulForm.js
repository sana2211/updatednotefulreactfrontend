import React from 'react'
import './NotefulForm.css'
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';

export default function NotefulForm(props) {
  const { className, handlesubmit, ...otherProps } = props
  return (
    <ErrorBoundary>
    <form onSubmit={e=>handlesubmit(e)}
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
    </ErrorBoundary>
  )
}

NotefulForm.propTypes = {
  handlesubmit: PropTypes.func.isRequired,
  className: PropTypes.string
};