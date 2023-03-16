import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './Component/ErrorPage'
import MailBox from './Component/MailBox'
import DashBoard from './Component/DashBoard'
import Cart from './Component/Cart'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/mailbox',
    element: <MailBox />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
