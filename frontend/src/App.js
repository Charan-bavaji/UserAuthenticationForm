import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Username> Root Route</Username>
    },
    {
      path: '/register',
      element: <div> Register Route</div>
    },
    {
      path: '/password',
      element: <Password>Password</Password>
    },
    {
      path: '/reset',
      element: <Register>Password</Register>
    },
    {
      path: '/profile',
      element: <Profile>Password</Profile>
    },
    {
      path: '/recovery',
      element: <Recovery>Password</Recovery>
    },
    {
      path: '*',
      element: <PageNotFound>Password</PageNotFound>
    }
  ])
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
