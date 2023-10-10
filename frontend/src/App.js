import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Reset from './components/Reset';
import Home from './components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home> Root Route</Home>
    },
    {
      path: '/signup',
      element: <Signup> Root Route</Signup>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <div> Register Route</div>
    },
    {
      path: '/profile',
      element: <Profile>Password</Profile>
    },
    {
      path: '/forgotpassword',
      element: <Recovery>Password</Recovery>
    },
    {
      path: '/resetpassword',
      element: <Reset>Password</Reset>
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
// to-do <^>
// user is not logined or signed - he cannot acces profile 