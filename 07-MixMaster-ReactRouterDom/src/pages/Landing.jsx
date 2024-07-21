import { useLoaderData } from 'react-router-dom';

export const loader = () => {
  return 'some value';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h2>Landing</h2>;
};

export default Landing;
