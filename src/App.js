import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './login/Login';
import SignUp from './signUp/SignUp';
import Shipping from './components/shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
       
        {
          path: 'shipping',
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
       
        {
          path:'login',
          element:<Login></Login>
        },
       
        {
          path:'signup',
          element:<SignUp>SignUp</SignUp>
        },
        {
          path:'about',
          element:<About></About>


        }

      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
