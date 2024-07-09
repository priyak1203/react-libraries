import SingleItem from './SingleItem';
import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

const Items = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/something');
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: '1rem' }}>There was an error...</p>;
  }

  return (
    <div className="items">
      {data?.taskList?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
