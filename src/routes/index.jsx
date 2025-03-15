import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DestinationDetails from '../pages/DestinationDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/destination/:id',
    element: <DestinationDetails />,
  },
]);

export default router;