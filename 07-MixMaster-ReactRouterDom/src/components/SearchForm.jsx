import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/Wrappers/SearchForm';

const SearchForm = () => {
  const navigate = useNavigation();

  const isSubmitting = navigate.state === 'submitting';

  return (
    <Wrapper>
      <Form className="form">
        <input type="search" name="search" className="form-input" />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
