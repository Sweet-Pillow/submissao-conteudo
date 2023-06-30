import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: "/submissao-conteudo",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
