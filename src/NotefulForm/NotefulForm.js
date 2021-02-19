import React from 'react'
import './NotefulForm.css'
import PropTypes from 'prop-types';

export default function NotefulForm(props) {
  console.log(props);
  const { className, ...otherProps } = props
  return (
    <form onSubmit={(e) => props.handleSubmit(e)}
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

NotefulForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
};