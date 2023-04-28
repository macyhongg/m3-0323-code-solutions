import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  useEffect(()=> {
    let ignore = false;

    async function fetchUserInfo() {
      if (!ignore) {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId, {method: "GET"});
          if (!response.ok) throw new Error('Error: ' + response.status);
          const data = await response.json();
          setUser(data);
          } catch(error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    }
    fetchUserInfo();
    return ()=> {
      ignore = true;
    }
  },[userId])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
