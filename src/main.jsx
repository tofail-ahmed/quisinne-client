import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Main from './Layout/Main.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import ChefDetails from './ChefDetails/ChefDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },{
        path:'/login',
        element:<Login></Login>
      }, {
        path: '/register',
        element: <Register></Register>
      }, {
        path: ':id',
        element: <ChefDetails></ChefDetails>,
        loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
