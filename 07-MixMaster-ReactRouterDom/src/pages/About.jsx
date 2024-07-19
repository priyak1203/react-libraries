import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About</h2>

      <Link to="person">person</Link>
      <Outlet />
    </div>
  );
};

export default About;
