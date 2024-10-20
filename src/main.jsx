import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Incidents from './pages/incidents/Incidents.jsx';
import Location from './pages/location/Location.jsx';
import IncidentBar from './pages/incidents/IncidentBar.jsx';
import NewIncidents from './pages/incidents/NewIncidents.jsx';
import NextPartIncidents from './pages/incidents/NextPartIncidents.jsx';
import NewIncidentLocation from './pages/incidents/NewIncidentLocation.jsx';
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
      path:"/incidents/incidentBar" ,
      element:<IncidentBar />
    },
    {
      path:"/incidents/incidentBar/newIncidents" ,
      element:<NewIncidents />
    },
    {
      path:"/incidents/incidentBar/newIncidents/nextPartIncidents" ,
      element:<NextPartIncidents />
    },
    {
      path:"/incidents/incidentBar/newIncidents/nextPartIncidents/location" ,
      element:<NewIncidentLocation />
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
