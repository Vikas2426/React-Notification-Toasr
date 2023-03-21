import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FaTimes } from 'react-icons/fa';
import notificationSound from './notification.mp3';

interface NotificationToastProps {
  message: string;
  type: 'success' | 'warning' | 'error';
  onClose?: () => void;
}

const NotificationToast: React.FunctionComponent<NotificationToastProps> = ({
  message,
  type,
  onClose,
}) => {
  const [showToast, setShowToast] = React.useState(true);
  let icon: React.ReactNode;

  if (type === 'success') {
    icon = <FontAwesomeIcon icon={faCheckCircle} />;
  } else if (type === 'warning') {
    icon = <FontAwesomeIcon icon={faExclamationTriangle} />;
  } else if (type === 'error') {
    icon = <FontAwesomeIcon icon={faTimesCircle} />;
  }

  React.useEffect(() => {
    let sound: HTMLAudioElement | null = null;
    if (showToast) {
      sound = new Audio(notificationSound);
      sound.play();
    }
    return () => {
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
      }
    };
  }, [showToast]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
      onClose?.();
    }, 30000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const handleCloseClick = () => {
    setShowToast(false);
    onClose?.();
  };

  if (!showToast) {
    return null;
  }

  return (
    <div className={`toast ${type}`}>
      {icon}
      <span className="message">{message}</span>
      <button className="close-btn" onClick={handleCloseClick}>
        <FaTimes />
      </button>
    </div>
  );
};
export default NotificationToast;
