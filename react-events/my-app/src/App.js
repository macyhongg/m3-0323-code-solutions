import CustomButton from './CustomButton';

function App() {
  return (
   <div>
    <CustomButton text="Pikachu" color="yellow" customClick={() => alert('Pika Pika!')} />
      <CustomButton text="Squirtle" color="#5dc6dc" customClick={() => alert('Squirtle Squaaad')} />
      <CustomButton text="Charmander" color="#e9782b" customClick={() => alert('Charmander Charr')}/>

   </div>
  );
}

export default App;
