import { useState } from 'react';
import check from './check.svg';
import x from './x.svg'

export default function ValidatedInput(){
const [password, setPassword] = useState('');
  var finalMessage = ' ';
  var icon = x;

  if (password.length > 8
      && (/([!@#$%^&*()]).+/g.test(password))
      && (/([0-9]).+/g.test(password))
      && (/([A-Z]).+/g.test(password))) {
    finalMessage = ''
    icon = check
  }
    else if (password === '') {
    finalMessage = "A password is required."
  } else if (password.length < 8) {
    finalMessage = "Your password is too short."
  } else if ((/([A-Z]).+/g.test(password)) === false) {
    finalMessage = "Password must contain a capital letter."
  } else if ((/([0-9]).+/g.test(password)) === false) {
    finalMessage = "Password must contain a digit."
  } else if ((/([!@#$%^&*()]).+/g.test(password)) === false) {
    finalMessage = "Password must contain a special character."
  }

return (
    <>
    <div className='align'>
      <input
    name="password"
    value={password}
    type="password"
    onChange={e => setPassword(e.target.value)}
    />
    <img src={icon} alt="icon" />
    </div>
    <span className='final-message'>{finalMessage}</span>
    </>

  )
}
