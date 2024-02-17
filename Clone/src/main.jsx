import React from 'react'
import ReactDOM from 'react-dom/client'
import IndexPage  from './pages/IndexPage.jsx'
import './index.css'
// import {BrowserRouter} from 'react-router-dom'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import axios from 'axios'
axios.defaults.baseURL='http://localhost:4000';
const router = createBrowserRouter([
  {path :'/',
  element : <Layout/>,
  children:[
    {
  path : '/',
  element : <IndexPage />,
},
{
  path : '/register',
  element : <RegisterPage />,
},
{
  path:'/login',
  element :<LoginPage/>,
},]}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
