import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
