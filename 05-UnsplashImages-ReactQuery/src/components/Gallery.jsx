import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = `https://api.unsplash.com/search/photos?query=office&client_id=f4NbmCFlA1q65QOE9SdDSL_jpNnxn2uBusmySTfCC_E`;

const Gallery = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = data.results;

  if (results?.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
