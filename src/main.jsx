import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Errorpage from './Components/ErrorPage/Errorpage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:
    <Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../public/jobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('../public/jobs.json')

      }
      

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
