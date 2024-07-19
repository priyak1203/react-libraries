import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <h2>HomeLayout</h2>
      <Link to="/about">about page</Link>
    </div>
  );
};

export default HomeLayout;
