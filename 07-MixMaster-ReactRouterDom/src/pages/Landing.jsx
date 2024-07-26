import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get('search') || '';

  // const { data } = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  // return { drinks: data.drinks, searchTerm };
  return { searchTerm };
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(
    searchCocktailsQuery(searchTerm)
  );

  if (isLoading) {
    return <h4>loading...</h4>;
  }

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
