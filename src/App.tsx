import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import DetailMovie from './pages/detail-movie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/details/:id',
    element: <DetailMovie />,
  },

  {
    path: '*',
    element: (
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        ERROR PAGE
      </h1>
    ),
  },
]);

function App() {
  return (
    <>
      <div className="m-5">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
