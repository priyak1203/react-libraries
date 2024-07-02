import { useMemo, useState } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchDrinks } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    let timeoutId;

    return (e) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fetchDrinks(searchTerm);
      }, 1000);
    };
  };

  const debounceSearchCocktail = useMemo(() => searchCocktail(), []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={searchTerm}
            onChange={debounceSearchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
