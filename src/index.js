
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';


const AppCtn = () =>{
  return <Provider store={store}>
  <App />
</Provider>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppCtn/>)


// ReactDOM.render(
//   ,
//   document.getElementById('root')
// );

