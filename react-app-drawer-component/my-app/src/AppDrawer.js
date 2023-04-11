import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function AppDrawer({menu, items, page, drawer}){
  const [openDrawer, setOpenDrawer] = useState(false);
  const item = items.map(x => <ul>{x}</ul>)

  function handleClick() {
    setOpenDrawer(!openDrawer);
  };

if (openDrawer === true) {
  page = 'page-dim';
  drawer = 'menu menu-open';
  var click = handleClick;
} else if (openDrawer === false){
  page = 'page';
  drawer = 'menu menu-closed';
}

    return (
      <>
        <div className={page} onClick={click}>
        < FaBars onClick = {handleClick}/>
      </div>
      <div className={drawer}>
        <div classname='menu-list'>
          <h2>{menu}</h2>
          <a href=''>{item}</a>
        </div>
      </div>
      </>
    )
  };
