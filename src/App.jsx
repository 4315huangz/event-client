import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import * as Pages from './pages';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Pages.HomeLayout />,
    errorElement: <Pages.Error />,  
    children: [
      {
        index: true,
        element: <Pages.Landing />
      },
      {
        path:'login',
        element:<Pages.Login />
      },
      {
        path:'register',
        element:<Pages.Register />
      },
      {
        path: 'dashboard',
        element: <Pages.DashboardLayout />,
        children: [
          {
            index: true,
            element:<Pages.AddEvent />
          },
          {
            path: 'all-events',
            element: <Pages.AllEvents />
          },
          {
            path: 'profile',
            element: <Pages.Profile />
          },
          {
            path: 'stats',
            element: <Pages.Stats />
          },
          {
            path:'admin',
            element:<Pages.Admin />
          }
        ]
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />;
}

export default App;