import React from 'react';
import { useState } from 'react';
/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 */
export default function Container({ items }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div>{items[index]}</div>
      <div>
        <CustomButton
          text="Prev"
          handleClick={() => {setIndex((index - 1 + items.length) % items.length)}}
           />
        <Indicators
          count={items.length}
          index={index}
          onSelect={(i) => setIndex(i)}
          />
        <CustomButton
          text="Next"
          handleClick={() => {setIndex((index + 1) % items.length)}}
         />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 */
function CustomButton({ text, handleClick, backgroundColor}) {
  return <button
            style={{backgroundColor}}
            onClick={handleClick}
            >
          {text}</button>;
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, onSelect, index}) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        handleClick={()=> onSelect(i)}
        backgroundColor={ i === index ? 'lightblue' : 'white'}
        />);
  }
  return <div>{buttons}</div>;
}
