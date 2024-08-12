import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';

export const loader = async ({ params }) => {
  try {
    const response = await customFetch(`/products/${params.id}`);
    return { product: response.data.data };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, company, price, description, colors } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <section>
      {/* BREAD CRUMBS */}
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT DETAILS */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* PRODUCT IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 rounded-lg object-cover lg:w-full"
        />

        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="mt-2 text-xl text-neutral-content font-bold">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
