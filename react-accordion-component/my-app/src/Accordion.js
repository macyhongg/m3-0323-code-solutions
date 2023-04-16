import Panel from './Panel';
import { useState } from "react";


export default function Accordion({topic}){
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index){
    activeIndex === index ? setActiveIndex(0) : setActiveIndex(index)
  }

  return (
  topic.map(topic => (
  <Panel
    className='app'
    key={topic.id}
    title={topic.title}
    summary={topic.summary}
    id={topic.id}
    isActive={activeIndex === topic.id}
    onClick={()=> handleClick(topic.id)}
    />
  ))
  )
}
