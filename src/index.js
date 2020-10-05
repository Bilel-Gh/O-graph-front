import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';


ReactDOM.render(

    
  <Provider store = { store }>
      <App />     
  </Provider>,
  document.getElementById('root')
);

