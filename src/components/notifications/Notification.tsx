import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {removeNotification} from "../../app/slices/notificationSlice";

interface NotificationProps {
  notification: {
    id: string;
    message: string;
  };
}

const Notification: React.FC<NotificationProps> = ({notification}) => {
  const [show, setShow] = [useState(false), useState(null)];

  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(
      () => dispatch(removeNotification(notification.id)),
      5000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-orange text-white shadow-md rounded p-5 mr-5 mb-5 text-lg font-bold">
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;
