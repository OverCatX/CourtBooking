import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CourtsPage from './pages/courts/CourtsPage.jsx'
import Headers from './components/Header.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/courts',
    element: <CourtsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headers/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
