import Container from './Container';
import './App.css';

const items = ["Aardvark", "Bengal", "Caterpillar", "Dromedary", "Elephant", "Ferret"];

export default function App() {
  return (
    <div className="App">
      <Container items={items} />
    </div>
  );
}
