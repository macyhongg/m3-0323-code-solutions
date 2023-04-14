import './App.css';
import Accordion from './Accordion';

const novels = [
  {
    id: 1,
    title: 'Southland by Nina Revoyr',
    summary: 'Southland is a Los Angeles Times best-selling novel and "Best book of 2003" by Nina Revoyr. It focuses on quest for the past and present of racial justice in Los Angeles. The novel is also a Book Sense 76 pick, an Edgar Award finalist, and the winner of the Ferro-Grumley Award and the Lambda Literary Award.'
  },
  {
    id: 2,
    title: 'A Gesture Life by Chang-Rae Lee',
    summary: 'A Gesture Life is a 1999 novel written by Chang-Rae Lee which takes the form of a narrative of an elderly medical-supply salesman named Doc Hata, who deals with everyday life in a small town in the United States called Bedley Run, and who remembers treating Korean comfort women for the Japanese Imperial Army during World War II. He once owned a medical and surgical supply store and he has an adopted daughter named Sunny. All the problems which Doc Hata has to deal with stem from his experiences serving the Japanese Imperial Army in the World War II.'
  },
  {
    id: 3,
    title: 'Passing by Nella Larsen',
    summary: 'Passing is a novel by American author Nella Larsen, first published in 1929. Set primarily in the Harlem neighborhood of New York City in the 1920s, the story centers on the reunion of two childhood friends—Clare Kendry and Irene Redfield—and their increasing fascination with each one another`s lives.'
  }];

export default function App() {

  return (
    <div className='app'>
    <Accordion topic={novels} />
    </div>
  );
};
