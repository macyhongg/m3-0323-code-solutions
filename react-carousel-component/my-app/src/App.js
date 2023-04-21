import './App.css';
import Carousel from './Carousel';

const images = [
  { url: 'https://static.designboom.com/wp-content/uploads/2021/01/daniel-arsham-time-dilation-perrotin-new-york-designboom-700.jpg', alt: 'Purple Crystallized Gengar' },
  { url: 'https://galeriemagazine.com/wp-content/uploads/2023/04/Daniel-Arsham-Amethyst-Crystallized-Seated-Pikachu-2020.jpg', alt: 'Amethyst Crystallized Pikachu' },
  { url: 'https://i2.wp.com/respawwn.com/wp-content/uploads/2020/06/Daniel-Arsham-Pokemon-Exposition-Kanto-6.jpg?ssl=1', alt: 'Crystallized Jigglypuff' },
  { url: 'https://i0.wp.com/respawwn.com/wp-content/uploads/2020/06/Daniel-Arsham-Pokemon-Exposition-Kanto-1.jpg?strip=info&w=750&ssl=1', alt: 'Crystallized Porygon'}]

function App() {
  return (
   <Carousel title="David Arsham's Pokemon" images={images}/>
  );
}

export default App;
