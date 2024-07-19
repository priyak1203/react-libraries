import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cocktail, HomeLayout, Landing, Newsletter } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'cocktail', element: <Cocktail /> },
      {
        path: 'about',
        element: <About />,
        children: [
          { index: true, element: <h2>our company</h2> },
          { path: 'person', element: <h3>john doe</h3> },
        ],
      },
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
