import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'

const User = ({ match }) => {
  const context = useContext(Context)
  useEffect(() => {
    context.getUser(match.params.login);
    context.getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    bio,
    html_url,
    followers,
    following,
    public_repos,
  } = context.user;


  if (context.loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      <div className="card text-center">
        <div className="all-center">
          <img src={avatar_url} alt="avatar" className="round-img" style={{ width: '150px' }} />
          <h1>{name}</h1>
        </div>
        <div>
          {bio && (
            <>
              {/* <h3>Bio</h3> */}
              <p>{bio}</p>
            </>
          )}
          <div className="card text-center">
            <span className="badge">Followers: {followers}</span>
            <span className="badge">Following: {following}</span>
            <span className="badge">Public Repos: {public_repos}</span>
          </div>
          <a href={html_url} className="text-center btn btn-dark my-1">Visit Github Profile</a>

        </div>
      </div>
    </>
  )
}


export default User
