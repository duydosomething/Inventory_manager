import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header"

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Header />
      <App />
    </div>
  </BrowserRouter>
  ), document.getElementById('root')
);
registerServiceWorker();
