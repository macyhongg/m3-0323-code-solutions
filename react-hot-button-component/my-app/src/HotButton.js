import { useState } from 'react';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);

  function handleClick(){
    setClicks(clicks + 1);
  }

  const buttonColor = clicks <= 3 ? 'dark-purple'
  : clicks <= 6 ? 'light-purple'
  : clicks <= 9 ? 'coral'
  : clicks <= 12 ? 'orange'
  : clicks <= 15 ? 'yellow'
  : 'white'

return (
    <button onClick={handleClick} className={buttonColor}>Hot Button</button>
  );
}
