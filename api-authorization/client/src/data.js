export async function readEntries() {
  const req = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  };
  const res = await fetch('/api/entries', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function addEntry(entry) {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    body: JSON.stringify(entry),
  };
  const res = await fetch('/api/entries', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function updateEntry(entry) {
  const req = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    body: JSON.stringify(entry),
  };
  const res = await fetch(`/api/entries/${entry.entryId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function removeEntry(entryId) {
  const req = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  };
  const res = await fetch(`/api/entries/${entryId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
}
