import { useEffect } from 'react';
import authFetch from '../axios/custom';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const responseOne = await authFetch('/react-store-products');
      const responseTwo = await axios(randomUserUrl);

      console.log(responseOne, responseTwo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">CustomInstance</h2>;
};

export default CustomInstance;
