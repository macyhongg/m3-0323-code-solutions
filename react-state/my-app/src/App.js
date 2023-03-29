import './App.css';
import ToggleButton from './ToggleButton'

export default function App() {
  return (
    <div className="App">
      <ToggleButton text="Pikachu" color="yellow"/>
      <ToggleButton text="Squirtle" color="cyan" />
      <ToggleButton text="Charmander" color="orange" />
    </div>
  );
}
