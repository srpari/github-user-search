import React, { Fragment } from 'react'

const NotFound = ({ type }) => {
  return (
    <Fragment>
      <p className="lead">The {type} you are looking for doesn't exist...</p>
    </Fragment>
  )
}

export default NotFound
