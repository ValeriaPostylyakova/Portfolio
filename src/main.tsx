import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App.tsx';
import Project from './pages/Project.tsx';

const router = createBrowserRouter([
    {
        path: '/Portfolio/',
        element: <App />,
    },
    {
        path: '/Portfolio/project/:id',
        element: <Project />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
