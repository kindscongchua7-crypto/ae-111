import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/style.css';
import { RouterProvider } from 'react-router';
import router from '@/router/router';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Analytics />
    </React.StrictMode>
);

