import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Project1 from "./components/pages/Project1.tsx";
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/Portfolio',
    element: <App />,
  },
  {
    path: '/Portfolio/project1',
    element: <Project1 />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
