import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import * as Pages from './pages';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Pages.HomeLayout />
  },
  {
    path:'/addEvent',
    element:<Pages.AddEvent />
  },
  {
    path: '/admin',
    element: <Pages.Admin />
  },
  {
    path: '/allEvents',
    element: <Pages.AllEvents />
  },
  {
    path: '/dashboardLayout',
    element: <Pages.DashboardLayout />
  },
  {
    path: '/delete',
    element: <Pages.DeleteEvent />
  },
  {
    path: '/error',
    element: <Pages.Error />
  },
  {
    path: '/edit',
    element: <Pages.EditEvent />
  },
  {
    path: '/landing',
    element: <Pages.Landing />
  },
  {
    path:'/login',
    element:<Pages.Login />
  },
  {
    path: '/profile',
    element: <Pages.Profile />
  },
  {
    path:'/register',
    element:<Pages.Register />
  },
  {
    path:'/stats',
    element:<Pages.Stats />
  },
])
const App = () => {
  return <RouterProvider router={router} />;
  
}

export default App;