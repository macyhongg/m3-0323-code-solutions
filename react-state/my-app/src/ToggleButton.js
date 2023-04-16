import { useState } from 'react';

export default function ToggleButton({text, backgroundColor, color}) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('This is the value returned by useState:', isClicked)

  function handleClick(){
    console.log('This is the value before calling the setter: ', isClicked)
    setIsClicked(!isClicked);
    console.log('This is the value after calling the setter: ', isClicked)
  }

  return (
    <button
      onClick={handleClick}
      style={{backgroundColor: isClicked ? color : 'whitesmoke'}}>
      {text}
    </button>
  )
};
