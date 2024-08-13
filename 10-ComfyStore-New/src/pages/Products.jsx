import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async () => {
  try {
    const response = await customFetch(url);
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;
