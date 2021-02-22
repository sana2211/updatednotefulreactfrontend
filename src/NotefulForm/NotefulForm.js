import React from 'react'
import './NotefulForm.css'
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';

export default function NotefulForm(props) {
  console.log(props);
  const { className, ...otherProps } = props
  return (
    <ErrorBoundary>
    <form onSubmit={(e) => props.handleSubmit(e)}
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
    </ErrorBoundary>
  )
}

NotefulForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};