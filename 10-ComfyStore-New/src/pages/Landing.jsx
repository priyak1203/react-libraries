import { Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  try {
    const response = await customFetch(url);
    console.log(response);
    const products = response.data.data;
    return products;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;
