import React from 'react'
import './NotefulForm.css'

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
