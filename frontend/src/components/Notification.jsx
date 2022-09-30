import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <TouchableOpacity>
    <View className="mt-2 px-5 bg-light-purple flex-row  items-center relative h-[98px]">
        <Text className='pr-3 pt-2 text-md absolute right-0 top-0'>23-9-2022</Text>
      
       
    
    <View className="flex-row  items-center" >
        <View className="relative">
            <Image source={require("../assets/Notifications/campana.png")} className="h-10 w-10 object-contain"/>
            <View className="bg-[#570E7E] h-[25px] w-[25px] rounded-full absolute -right-4 -top-4 flex items-center justify-center">
                <Text className='font-bold'>1</Text>
            </View>
            
        </View>
        <View className="ml-4">
            <Text className='text-lg text-dark-purple font-extrabold'>¡Tu postulación fue aceptada!</Text>
            <Text className='text-base'>Tu postulación para xxxxx fue aceptada</Text> 
        </View> 
    </View>
    

  </View>
  </TouchableOpacity>
  )
}