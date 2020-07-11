import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
import CollectionProvider from './providers/CollectionProvider';
import ThingProvider from './providers/ThingProvider';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <CollectionProvider>
    <ThingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThingProvider>
    </CollectionProvider>
  </AuthProvider>,
  document.getElementById('root')
);
