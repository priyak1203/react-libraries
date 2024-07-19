import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, HomeLayout } from './pages';

const router = createBrowserRouter([
  { path: '/', element: <HomeLayout /> },
  { path: '/about', element: <About /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <h1>MixMaster - React Router DOM</h1>
    </RouterProvider>
  );
}

export default App;
