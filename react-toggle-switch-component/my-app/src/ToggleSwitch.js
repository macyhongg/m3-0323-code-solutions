import { useState } from 'react';

export default function ToggleSwitch() {
  const [toggleOff, setToggleOff] = useState(false);
  const status = toggleOff ? 'on' : 'off'

  return (
    <button
      className={'toggle-' + status}
      onClick={() => setToggleOff(!toggleOff)}>
      <button className={'slider-' + status}>
        <span>{status}</span>
      </button>
    </button>
  )
}
