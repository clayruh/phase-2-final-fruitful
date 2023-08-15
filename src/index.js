import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// COMPONENTS //
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import FruitfulPage from './components/FruitfulPage';
import TreeList from './components/TreeList';

// LOADERS //
import { getMulberryTrees } from './loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // children components of App that will show up in Outlet
      {
        index: "true",
        element: <FruitfulPage />
      },
      {
        path: "trees",
        element: <TreeList />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/> );