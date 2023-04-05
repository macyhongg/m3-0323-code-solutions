import './App.css';
import check from './check.svg';
import x from './x.svg'
import ValidatedInput from './ValidatedInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Password
        <ValidatedInput />
      </header>
    </div>
  );
}

export default App;
