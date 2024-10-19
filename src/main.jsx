import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import { Incidents } from './pages/incidents/Incidents.jsx';
import Location from './pages/location/Location.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  
  children: [
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/incidents",
      element: <Incidents/>,
    },
    {
      path: "/location",
      element: <Location/>,
    },
    // {
    //   path: "/shop",
    //   element: <Shop/>,
    // },
  ],
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
