import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// COMPONENTS //
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import TreeList from './components/TreeList';
import MyTrees from './components/MyTrees';

// LOADERS //
import { getTrees } from './loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // children components of App that will show up in Outlet
      {
        index: true,
        element: <Home />
      },
      {
        path: "find-fruit-trees",
        element: <TreeList />,
        loader: getTrees
      },
      // {
      //   path: "my-trees",
      //   element: <MyTrees />,
      // }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/> );