import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import './index.css';
import Explore from './components/Explore';
import Sidenav from './components/Sidenav';
import Errorpage from './Errorpage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '*',
    element: <Errorpage />,
    errorElement: <Errorpage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidenav />
    <RouterProvider router={router} />
  </React.StrictMode>
);
