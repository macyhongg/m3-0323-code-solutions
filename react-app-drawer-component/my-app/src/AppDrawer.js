import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function AppDrawer({menu, items}){
  const [openDrawer, setOpenDrawer] = useState(false);
  const item = items.map(x => <ul onClick={() => onSelect(x)}>{x}</ul>)

  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  };

  function onSelect(x){
    toggleDrawer();
    var header = x;
    // const header = x;
    // onSelect(item);
    // console.log('display header!', x)
  }

  return (
    <>
      <div className={openDrawer ? 'page-dim' : 'page'} onClick={openDrawer ? toggleDrawer : null }>
        <FaBars onClick={toggleDrawer}/>
        <h1>hello</h1>
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
