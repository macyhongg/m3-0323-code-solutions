import { FaAngleLeft, FaAngleRight, FaRegCircle} from 'react-icons/fa';
import { useState } from 'react';

export default function Carousel({title, images}) {
  const [index, setIndex] = useState(0)

  function prevIndex(){
    setIndex((index - 1 + images.length) % images.length)
  }

  function nextIndex(){
    setIndex((index + 1) % images.length)
  }

  function Indicators(){
    const buttons = [];
    for (let i = 0; i < images.length; i++) {
      buttons.push(
        <FaRegCircle
        className='small indicators'
        onClick={()=> setIndex(i)}
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
