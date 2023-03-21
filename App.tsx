import * as React from 'react';
import './style.css';
import NotificationToast from './NotificationToast';

const bar = [];
export default function App() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: `100vh` }}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div className="toast-container">
        <NotificationToast
          message="Successfully submitted form!"
          type="success"
        />
        <NotificationToast message="Oops, something went wrong!" type="error" />
        <NotificationToast
          message="Please fill in all required fields.bvcvbv ffghfg ttfht ertdrdg ertrtr"
          type="warning"
        />
      </div>
    </div>
  );
}
