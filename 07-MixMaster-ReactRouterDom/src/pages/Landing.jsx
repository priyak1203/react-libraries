import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get('search') || '';

  const { data } = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: data.drinks, searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
