// import logo from './logo.svg';
import './App.css';

function CustomButton({text, color}) {
  return (
    <button className="customButton" style={{
      backgroundColor: {color}
    }}> {text}</button>
  )
}

function App() {
  return (
    <div>
      <CustomButton text="I" color="blue" />
      <CustomButton text="know" color="green" />
      <CustomButton text="react!" color="orange" />
    </div>
  );
}

export default App;
