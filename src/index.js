import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import Layout from './Layout.js';
import ShowEvents from './ShowEvents.js';
import AddEvents from './AddEvents.js';
import SeasonalEventForm from './SeasonalEventForm.js';
import OtherEventForm from './OtherEventForm.js';
import TestComponents from './TestComponents.js';
import reportWebVitals from './reportWebVitals';
import {loader} from './util/loaders.js';
import {addEventAction} from './util/actions.js'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <App />,
      },
      {
        path:"/events",
        element: <ShowEvents />,
        loader: loader,
      },
      {
        path:"/events/add",
        element: <AddEvents />,
        action: addEventAction,
      },
      {
        path:"/events/add/seasonal",
        element: <SeasonalEventForm />,
        loader: loader,
      },
      {
        path:"/events/add/other",
        element: <OtherEventForm />,
      },
      {
        path:"/test",
        element: <TestComponents />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
