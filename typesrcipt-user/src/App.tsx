import React, { useState } from 'react';
import "./App.css";
import { createUser, deleteUser, fetchReactUser } from './UserServices';
import InputUser from './components/InputUser';
import UserList from './components/UserList';
import './components/styles.css';
import { User } from "./models/models";



const App : React.FC = () => {

  const [name, setName] = useState<string>("")
  const [users, setUsers] = useState<User[]>([])
  
  // List of users:
  const listOfUsers = async () => {
    
    const res = await fetchReactUser();
    setUsers(res)
    
  }
  
  // Create a new user:
  const postUser = async () => {
    await createUser(name)

  }

  return (
    <div className="App">
      <span className="heading">Users</span>
     
      <InputUser name={name} setName={setName} postUser={postUser}/>
      <UserList users={users} setUsers={setUsers} />
      <br />
      <br />


      <div>
        <button className="input_submit1" onClick={listOfUsers}>
          GetUsers
        </button>
        
      </div>
      
    </div>

  );
}

export default App;
