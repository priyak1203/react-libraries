import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';

  return (
    <>
      <Navbar />
      <main className="page">
        {isPageLoading ? (
          <div className="loading loading-center" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </main>
    </>
  );
};

export default HomeLayout;
