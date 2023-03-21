# React-Notification-Toast

Notification Toast is a React component that displays a notification message to the user for a short period of time. The component includes a close button and a sound effect that plays when the toast pops up.

## Installation

You can install the packages using npm:

```bash
npm install
```

## Usage

To use the Notification Toast component in your React application, import it and render it wherever you want to display a notification:

```js
import NotificationToast from "notification-toast";

function MyComponent() {
  const handleNotificationClose = () => {
    console.log("Notification closed");
  };

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show notification</button>
      <NotificationToast
        message="This is a notification message"
        type="success"
        onClose={handleNotificationClose}
      />
    </div>
  );
}
```

The `message` prop specifies the text to display in the notification, and the `type` prop specifies the color scheme of the notification (either `'success'`, `'warning'`, or `'error'`). The `onClose` prop is a function that will be called when the notification is closed.

## Author

Notification Toast was created by Vikas Choubey.
You can find more of my work on my [personal website](https://vikasresume.netlify.app/),
[LinkedIn](https://www.linkedin.com/in/vikas-choubey), and [blog](https://dev.to/vikas2426).

## License

Notification Toast is [MIT licensed](./LICENSE).
