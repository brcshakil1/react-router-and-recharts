import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Error_Page from './Error_Page/Error_Page';
import Contact from './routes/Contact/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error_Page />,
    children:[
      {
        path: 'contacts/:contactsId',
        element: <Contact />
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
