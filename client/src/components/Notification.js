/* eslint-disable react/prop-types */
import React from 'react'

const Notification = ({ message, displayClass }) => {
  if (message === null) {
    return null
  }

  return <div className={displayClass}>{message}</div>
}

export default Notification
