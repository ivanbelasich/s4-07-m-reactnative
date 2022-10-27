import { ActivityIndicator,Text } from "react-native";
import React from "react";
import NotificationsList from "./NotificationsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NotificationsContainer = () => {
    const userData = useSelector((state) => state.user);
    // const user = userData[0]?.user;

    const {_id} = userData[0]?.user;

    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://s4-07-m-reactnative.herokuapp.com/api/users/${_id}/notifications`
            )
            .then((response) => {
                setNotification(response.data);
            })
            .finally(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(userData);

    if (loading) {
        return <ActivityIndicator size="large" color="purple" />;
    }
    if (notification.length === 0) {
        return (
            <Text className="text-2xl text-center">No hay notificaciones</Text>
        );
    }
    return <NotificationsList data={notification} />;
  
};

export default NotificationsContainer;
