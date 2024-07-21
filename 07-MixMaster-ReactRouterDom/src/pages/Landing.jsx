import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';

  const { data } = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: data.drinks, searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  console.log(searchTerm, drinks);
  return <h2>Landing</h2>;
};

export default Landing;
