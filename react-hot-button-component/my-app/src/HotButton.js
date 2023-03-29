import { useState } from 'react';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);
  console.log('Current number of clicks: ', clicks)

  function handleClick(){
    setClicks(clicks + 1);
  }

  // var buttonColor;
  // if (clicks <= 3) {
  //   buttonColor = 'dark-purple'
  // } else if (clicks <= 6) {
  //   buttonColor = 'light-purple'
  // } else if (clicks <= 9) {
  //   buttonColor = 'coral'
  // } else if (clicks > 9 && clicks <= 12) {
  //   buttonColor = 'orange'
  // } else if (clicks > 12 && clicks <= 15) {
  //   buttonColor = 'yellow'
  // } else {
  //   buttonColor = 'white'
  // }

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
