import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';
import { useState } from 'react';

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

  const [productColor, setProductColor] = useState(colors[0]);

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

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="capitalize text-medium font-wider font-medium">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
