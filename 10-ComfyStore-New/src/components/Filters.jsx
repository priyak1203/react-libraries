import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckBox from './FormCheckBox';

const Filters = () => {
  const { meta } = useLoaderData();
  console.log(meta);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />

      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />

      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />

      {/* ORDER  SORT BY */}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />

      {/* PRICE */}
      <FormRange label="select price" name="price" size="range-sm" />

      {/* SHIPPING */}
      <FormCheckBox label="free shipping" name="shipping" size="checkbox-sm" />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>
      <Link to={'/products'} className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
