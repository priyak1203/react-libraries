import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
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
