import { useState } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchDrinks } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    fetchDrinks(searchTerm);
  };

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
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
