import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import Context from '../../context/Context';
import UserItem from './UserItem';

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

}

export default function Users() {

    const gc = useContext(Context);

    const { loading, users } = gc;

    if (loading) {
        return <Spinner />
    }
    else {
        return (
            <div style={userStyle}>
                {
                    users.map(user => (
                        <UserItem key={user.id} user={user} />
                        // <div key={user.id}>{user} </div>
                    ))
                }
            </div>
        )
    }
}
