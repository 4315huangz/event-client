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
        path: 'dashboard',
        element: <Pages.DashboardLayout />
      },
      {
        path:'login',
        element:<Pages.Login />
      },
      {
        path:'register',
        element:<Pages.Register />
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />;
}

export default App;