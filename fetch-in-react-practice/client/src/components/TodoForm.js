import { useState } from 'react';

export default function TodoForm({ onSubmit }) {
  // Note: Use a controlled form so we can easily reset it after submit.
  const [task, setTask] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      task,
      isCompleted: false,
    };
    onSubmit(newTodo);
    setTask('');
  }

  return (
    <form className="input-group mb-4 shadow-sm" onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control"
        placeholder="What to do?" />
      <div className="input-group-append">
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </div>
    </form>
  );
}
