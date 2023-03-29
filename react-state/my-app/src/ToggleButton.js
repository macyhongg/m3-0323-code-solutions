import { useState } from 'react';

export default function ToggleButton({text, color}) {
  console.log('This is the value returned by useState:', isClicked)
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(){
    console.log('This is the value before calling the setter: ', isClicked)
    setIsClicked(!isClicked);
    console.log('This is the value after calling the setter: ', isClicked)
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
