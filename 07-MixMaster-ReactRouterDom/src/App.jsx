import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from './pages';
import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      { path: 'cocktail', element: <Cocktail /> },
      { path: 'about', element: <About /> },
      { path: 'newsletter', element: <Newsletter /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <h1>MixMaster - React Router DOM</h1>
    </RouterProvider>
  );
}

export default App;
