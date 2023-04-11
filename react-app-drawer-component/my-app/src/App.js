import './App.css';
import AppDrawer from './AppDrawer';

const array = ['Milk Teas', 'Fruit Teas', 'Infused Teas', 'Refreshers', 'Fruit Slushies']

function App() {
  return (
      <AppDrawer menu={'Menu'} items={array} />
  );
}

export default App;
