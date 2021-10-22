import React from 'react'
import { User } from '../models/models';
import SingleUser from './SingleUser';
import './styles.css';

interface Props{
    
    users: User[];
    setUsers:React.Dispatch<React.SetStateAction<User[]>>;
    
}

const UserList: React.FC<Props> = ({users, setUsers}) => {
    return (
        
        <div className='users'>
            {
                users.map(user => (
                    <SingleUser user={user} key={user.id}
                        users={users}
                        setUsers={setUsers}
                    />
                ))
            }
        </div>
    )
}

export default UserList
