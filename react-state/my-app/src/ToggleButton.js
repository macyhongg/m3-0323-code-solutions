import { useState } from 'react';

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(){
    setIsClicked(!isClicked);
  }

    if (!isClicked) {
      return (
        <button style={{ backgroundColor: 'whitesmoke'}} onClick={handleClick}>
          {text}
        </button>
      )
     }
     return (
        <button style={{ backgroundColor: color }} onClick={handleClick} >
          {text}
        </button>
       )
};
