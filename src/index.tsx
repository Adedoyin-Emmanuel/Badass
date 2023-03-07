import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const config = {
  scope: "/",
  registerOptions: {
    updateViaCache: "none"
  },
  onSuccess: (registration:any) => {
    console.log("Service worker registration successful:", registration);
  },
  onUpdate: (registration:any) => {
    console.log("Service worker update available:", registration);
  },
};


//we go add the service worker later :)
//we don add am ooo hah :)

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

