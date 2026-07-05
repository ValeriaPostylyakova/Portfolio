import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Main from './pages/Main.tsx';
import Project from './pages/Project.tsx';
import NotFound from './pages/NotFound.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'project/:id',
                element: <Project />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);
