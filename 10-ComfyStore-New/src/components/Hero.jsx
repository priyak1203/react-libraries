import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="text-4xl max-w-2xl font-bold tracking-tight sm:text-6xl">
          We’re changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary capitalize">
            our products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center bg-neutral rounded-box p-4 space-x-4">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box object-cover h-full w-80"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
