import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = `https://api.unsplash.com/search/photos?query=cat&client_id=f4NbmCFlA1q65QOE9SdDSL_jpNnxn2uBusmySTfCC_E`;

const Gallery = () => {
  const { data } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
  });

  console.log(data);
  return <h4>Gallery</h4>;
};

export default Gallery;
