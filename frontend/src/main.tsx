import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { router } from './router.tsx';
import { initTheme } from './utils/theme.ts';

import './index.css';
import './utils/i18n.ts';

initTheme();

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
    </QueryClientProvider>
);
