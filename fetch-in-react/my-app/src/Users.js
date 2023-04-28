import React, { useEffect, useState } from 'react';
import User from './User';
import UserCard from './UserCard';
import './Users.css';

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(()=> {
    let ignore = false;

    async function fetchUsers() {
      if (!ignore) {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: "GET"});
          if (!response.ok) throw new Error('Error: ' + response.status);
          const jsonData = await response.json();
          setUsers(jsonData);
        } catch(error) {
          setError(error)
        } finally {
          setIsLoading(false);
        }
      }
    }
    fetchUsers();
    return ()=> {
      ignore = true;
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && <User userId={user.id} onCancel={() => setUser(undefined)} />}
    </div>
    );
}

function UserList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) =>
        <li key={user.id}>
          <UserCard  user={user} onClick={onClick} />
        </li>
      )}
    </ul>
  );
}
