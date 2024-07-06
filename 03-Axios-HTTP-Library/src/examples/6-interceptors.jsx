import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-productss');
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">Interceptors</h2>;
};

export default Interceptors;
