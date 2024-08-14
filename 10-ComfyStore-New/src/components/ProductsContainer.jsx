import { useState } from 'react';
import ProductsList from './ProductsList';
import ProductsGrid from './ProductsGrid';
import { useLoaderData } from 'react-router-dom';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
  const [layout, setLayout] = useState('grid');

  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`;
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles('grid')}
            onClick={() => setLayout('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles('list')}
            onClick={() => setLayout('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
