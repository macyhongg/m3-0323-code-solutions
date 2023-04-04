import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log("username: ", username, ", password: ", password);
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        />
      </label>

      <button value="submit" type="submit">Submit</button>
    </form>
  )
}
