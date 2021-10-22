import React from 'react';
import { User } from '../models/models';
import { AiFillDelete } from 'react-icons/ai'
import { deleteUser } from '../UserServices';

type Props = {  
    user: User,
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const SingleUser = ({user, users, setUsers}: Props) => {

    const deleteU = async (id:number) => {
        await deleteUser(id)
    }

    return (
        <form className="users__single">
            <span className="users__single--text">
                {user.name}
            </span>
            <div>
                <span className="icon" onClick={() => deleteU(user.id)}>
                    <AiFillDelete />
                </span>
            </div>
        </form>
    )
}

export default SingleUser
