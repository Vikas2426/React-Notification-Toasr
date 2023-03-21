import * as React from 'react';
import './App.css';
import NotificationToast from './NotificationToast';

export default function App() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: `100vh` }}>
<h1>
Hello, welcome to my Notification Toast repository.
</h1>

      <div className="toast-container">
        <NotificationToast
          message="Successfully submitted form!"
          type="success"
        />
        <NotificationToast message="Oops, something went wrong!" type="error" />
        <NotificationToast
          message="Please fill in all required fields."
          type="warning"
        />
      </div>
    </div>
  );
}
