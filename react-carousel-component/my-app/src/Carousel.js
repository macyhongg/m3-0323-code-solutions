import { FaAngleLeft, FaAngleRight, FaRegCircle} from 'react-icons/fa';
import {Icon} from '@iconify/react';
import { useState, useEffect } from 'react';

export default function Carousel({title, images}) {
  const [index, setIndex] = useState(0)

  useEffect(()=> {
    const intervalId = setInterval(()=> {
      nextIndex();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextIndex]);

  function prevIndex(){
    setIndex((index - 1 + images.length) % images.length)
  }

  function nextIndex(){
    setIndex((index + 1) % images.length)
  }

  function Indicators(){
    const buttons = [];
    for (let i = 0; i < images.length; i++) {
      i === index ? buttons.push(
        <Icon icon="mdi:pokeball"
        className='pokeball indicators'
        key={i}
        onClick = {()=> setIndex(i)} />
      ) :
      buttons.push(
        <FaRegCircle
        className='small indicators'
        key={i}
        onClick={() => setIndex(i)}
        />
      )
    }
    return <div>{buttons}</div>;
  }

  return (
    <div className='container'>
      <section className='row'>
        <h3>{title}</h3>
      </section>
      <section className='row'>
        <FaAngleLeft onClick={prevIndex}/>
        <img src={images[index].url} alt={images[index].alt} />
        <FaAngleRight onClick={nextIndex} />
      </section>
      <section>
        <Indicators />
      </section>
    </div>
  )
}
