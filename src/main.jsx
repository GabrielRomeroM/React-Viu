import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ayuda from './components/pages/Ayuda.jsx';
import Formulario from './components/pages/Formulario.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }, 
  {
    path: '/ayuda',
    element: <Ayuda />,
  },
  {
    path: '/formulario',
    element: <Formulario />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
