import React from "react";
import NotificationCard from "./Notification";
import {useSelector} from "react-redux";
import {selectNotifications} from "../../app/slices/notificationSlice";

const NotificationContainer: React.FC = () => {
  const notifications = useSelector(selectNotifications);
  return (
    <div className="fixed z-50 right-0 bottom-0 ml-auto">
      {notifications && notifications.length
        ? notifications.map((notification, i) => {
            return (
              <NotificationCard
                key={i}
                notification={notification}
              ></NotificationCard>
            );
          })
        : null}
    </div>
  );
};

export default NotificationContainer;
