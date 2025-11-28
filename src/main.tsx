import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import Project from './pages/Project.tsx';
import { store } from './redux/store.ts';

const router = createBrowserRouter([
    {
        path: '/Portfolio/',
        element: <App />,
    },
    {
        path: '/project/:id',
        element: <Project />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
