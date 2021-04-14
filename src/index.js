import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import HomePage from './pages/homePage';
import Navigation from './navigation'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>  
  </React.StrictMode>,
  document.getElementById('root')
);


