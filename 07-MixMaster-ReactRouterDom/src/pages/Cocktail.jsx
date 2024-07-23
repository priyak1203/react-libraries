import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;

  const { data } = await axios.get(`${singleCocktailUrl}${id}`);

  return { id, data };
};

const Cocktail = () => {
  const { data, id } = useLoaderData();
  console.log({ id, data });
  return <h2>Cocktail</h2>;
};

export default Cocktail;
