import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <div> Root Route</div>
    },
    {
      path:'/register',
      element: <div> Register Route</div>
    }
  ])
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
