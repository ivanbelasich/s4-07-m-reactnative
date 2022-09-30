import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Notification from '../components/Notification'

const Notifications = () => {
  return (
    <View>
      <View className="h-[98px] relative flex-row justify-end items-center ">
        <TouchableOpacity className="mr-3 p-3 border border-solid border-dark-purple rounded">
          <Text>BORRAR TODAS</Text>  
        </TouchableOpacity> 
      </View>
      <Notification />
      <Notification />
      <Notification />
    </View>
  )
}

export default Notifications