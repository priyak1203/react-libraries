import axios from 'axios';
import { useEffect } from 'react';
import '../axios/global';

const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const responseOne = await axios(productsUrl);
      const responseTwo = await axios(randomUserUrl);
      console.log(responseOne);
      console.log(responseTwo);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">Global Instance</h2>;
};

export default GlobalInstance;
