import { useState } from 'react';
import check from './check.svg';
import x from './x.svg'

export default function ValidatedInput(){
const [password, setPassword] = useState('');
  // console.log(password)
  var finalMessage = ' ';
  var icon = check;

  if (password === '') {
    finalMessage = "A password is required."
    icon = x;
  } else if (password.length < 8) {
    finalMessage = "Your password is too short."
    icon = x;
  }

// const finalMessage  = password === '' ? "A password is required."
//     : password.length < 8 ? "Your password is too short."
//     : " "

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
