import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { Provider } from './Context.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Me from './Me/Me.jsx';
import About from './About/About.jsx';
import Projects from './Projec/Project.jsx';


const router = createBrowserRouter([
  {path : '/portfolio', element: <App /> },
  { path: '#me', element: <Me />, hash: 'me' },
  { path: '#about', element: <About />, hash: 'about' },
  { path: '#project', element: <Projects />, hash: 'project' },
   ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider> 
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

