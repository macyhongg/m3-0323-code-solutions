import { useEffect, useState } from 'react';
import { readEntries } from './data';

export default function EntryList({ onCreate, onEdit }) {
  const [isLoading, setIsLoading] = useState();
  const [entries, setEntries] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const entries = await readEntries();
        setEntries(entries);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) load();
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading entries: {error.message}</div>;
  if (!entries) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <button
              type="button"
              className="white-text form-link"
              onClick={onCreate}>
              NEW
            </button>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul">
            {entries.map((entry) => (
              <Entry key={entry.entryId} entry={entry} onEdit={onEdit} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Entry({ entry, onEdit }) {
  return (
    <li>
      <div className="row">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            src={entry.photoUrl}
            alt=""
          />
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between">
              <h3>{entry.title}</h3>
              <i
                className="fa-solid fa-pencil"
                onClick={() => onEdit(entry)}></i>
            </div>
          </div>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
