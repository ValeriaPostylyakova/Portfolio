import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import NotFound from './pages/NotFound.tsx';
import Project from './pages/Project.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/project/:id',
        element: <Project />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
    </QueryClientProvider>
);
