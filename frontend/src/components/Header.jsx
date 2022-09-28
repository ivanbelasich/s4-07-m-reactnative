import React from 'react'
import { View,Text,TouchableOpacity,Image } from 'react-native'

const Header = () => {
  return (
    <View className="mt-8 py-5 px-7 bg-[#724BB6] flex-row  items-center justify-between  ">
      <TouchableOpacity>
        <Image source={require("../assets/bars.png")} className="h-12 w-12"/>
      </TouchableOpacity>
      <View className="flex-row items-center" >
        <Text className='pr-3 text-lg'>Lorem ipsum</Text>
        <View className='rounded-full'>
        <Image
          source={require("../assets/avatar.png")}
          className='h-12 w-12'
        />
        </View>
      </View>

    </View>
  )
}

export default Header
