import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from './utils';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn" disabled={isPending}>
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
