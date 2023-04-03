import { useState } from 'react';

export default function ToggleSwitch() {
  const [toggleOff, setToggleOff] = useState(false);
  console.log('Current state: ', toggleOff)

  function handleClick() {
    setToggleOff(!toggleOff);
  }

  if (!toggleOff) {
    return (
      <button className='toggle-off' onClick={handleClick}>
        <button className='slider-off'>
        </button>
        <span>OFF</span>
      </button>
    )
  } else {
    return (
      <button className='toggle-on' onClick={handleClick}>
        <button className='slider-on'>
        </button>
        <span>ON</span>
      </button>
    )
  }
}
