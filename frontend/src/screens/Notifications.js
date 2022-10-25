import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import NotificationsContainer from '../components/notifications/NotificationsContainer'
// import Notification from '../components/notifications/Notification'

const Notifications = () => {
  return (
    <View>
      {/* <View className="h-[98px] relative flex-row justify-end items-center ">
        <TouchableOpacity className="mr-3 p-3 border border-solid border-dark-purple rounded">
          <Text className="text-dark-purple font-extrabold">BORRAR TODAS</Text>  
        </TouchableOpacity> 
      </View>
      */}
      <NotificationsContainer />
    </View>
  )
}

export default Notifications