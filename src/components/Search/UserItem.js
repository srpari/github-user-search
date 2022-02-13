import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {

  return (
    <div className="card text-center grid-1">
      <img
        src={avatar_url}
        alt="User Avater"
        className="round-img"
        style={{ width: '50px', borderRadius: '50%' }}
      />
      <h3>{login}</h3>
      <div className="text-center">
        <Link to={`user/${login}`} className="btn btn-dark ">View</Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}
export default UserItem
