import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function AppDrawer({menu, items}){
  const [openDrawer, setOpenDrawer] = useState(false);
  const [header, setHeader] = useState('Welcome')
  const item = items.map(x => <ul key={x} onClick={() => handleClick(x)}>{x}</ul>)

  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  };

  function handleClick(x){
    toggleDrawer();
    setHeader(x);
  }

  return (
    <>
      <div className={openDrawer ? 'page-dim' : 'page'} onClick={openDrawer ? toggleDrawer : null }>
        <FaBars onClick={toggleDrawer}/>
        <h1>{header}</h1>
      </div>
      <section className={openDrawer ? 'menu menu-open' : 'menu menu-closed'}>
        <div className='menu-list'>
          <h2>{menu}</h2>
          <li>{item}</li>
        </div>
      </section>
    </>
  )
  };
