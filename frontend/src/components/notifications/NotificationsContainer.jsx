import { ActivityIndicator } from "react-native";
import React from "react";
import NotificationsList from "./NotificationsList";
import axios from "axios";
import { useEffect, useState } from "react";

const NotificationsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState([]);
  const [dataOk, setDataOk] = useState(false);

  useEffect(() => {
    axios
      .get("https://s4-07-m-reactnative.herokuapp.com/notifications")
      .then((response) => {
        setNotification(response.data);
      })
      .finally(() => {
        setDataOk(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    notification.forEach((notification, index) => {
      axios
        .get(
          `https://s4-07-m-reactnative.herokuapp.com/notifications/${notification.userId}`
        )
        .then((response) => {
          setNotification((notification) => {
            const newNotification = [...notification];
            newNotification[index]._id = notification._id;
            newNotification[index].titulo = notification.titulo;
            newNotification[index].descripcion = notification.descripcion;
            newNotification[index].userId = notification.userId;
            newNotification[index].fecha = notification.fecha;
            newNotification[index].leido = notification.leido;

            return newNotification;
          });
          console.log(notification);
        })
        .finally(() => {
          if (index === notification.length - 1) {
            setLoading(false);
          }
        })
        .catch((error) => console.log(error));
    });
  }, [dataOk]);

  if (loading) {
    return <ActivityIndicator size="large" color="purple" />;
  }
  {
  }
  return <NotificationsList data={notification} />;
};

export default NotificationsContainer;
