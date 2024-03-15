import { useEffect, useRef, useState } from 'react'
import Main from './components/main'
import NotificationHeader from './components/notification-header'
import Notification from './components/notification'
import './App.css'

function App() {

  const NOTIFICATIONS_MOCK = [
    {
      id: 1,
      name: 'Daniel',
      asRead: false,
    },
    {
      id: 2,
      name: 'Mateus',
      asRead: false,
    },
    {
      id: 3,
      name: 'Vitória',
      asRead: false,
    }
  ];

  const [notRead, setNotRead] = useState(0);
  const [notifications, setNotifications] = useState(NOTIFICATIONS_MOCK);

  useEffect(() => {
    let count = 0;

    notifications.map((item) => {
      if (item.asRead != false) {
        count = count + 1;
      };

      setNotRead(count);
    });
  }, [notifications]);

  const handleNotificationClick = id => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, asRead: !notification.asRead } : notification
      )
    );
  };

  return (
    <>
      <Main>
        <NotificationHeader notRead={notRead} />

        { notifications.map((item) =>
          <div onClick={() => handleNotificationClick(item.id)}>
            { item.name }
          </div>
        )}
      </Main>
    </>
  )
}

export default App
