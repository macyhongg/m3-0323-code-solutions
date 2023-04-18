import { useState } from 'react';
import check from './check.svg';
import x from './x.svg'

export default function ValidatedInput(){
const [password, setPassword] = useState('');
  var finalMessage = ' ';
  var icon = x;

   if (password === '') {
    finalMessage = "A password is required."
  } else if (password.length < 8) {
    finalMessage = "Your password is too short."
  } else if ((/([A-Z])/.test(password)) === false) {
    finalMessage = "Password must contain a capital letter."
  } else if ((/([0-9])/.test(password)) === false) {
    finalMessage = "Password must contain a digit."
  } else if ((/([!@#$%^&*()])/.test(password)) === false) {
    finalMessage = "Password must contain a special character."
   } else if (password.length > 8
     && (/([!@#$%^&*()])/.test(password))
     && (/([0-9])/.test(password))
     && (/([A-Z])/.test(password))) {
     finalMessage = '';
     icon = check;
   }

return (
    <>
    <div className='align'>
      <input
    name="password"
    value={password}
    type="password"
    onChange={e => {setPassword(e.target.value);
              console.log(password)}}
    />
    <img src={icon} alt="icon" />
    </div>
    <span className='final-message'>{finalMessage}</span>
    </>

  )
}
