import { useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { useEditTask } from './reactQueryCustomHooks';

const SingleItem = ({ item }) => {
  const { editTask } = useEditTask();

  const { mutate: deleteTask, isPending } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isPending}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
