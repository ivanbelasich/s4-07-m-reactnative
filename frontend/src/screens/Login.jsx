import { View, Text } from 'react-native'
import React from 'react'
import LoginContainer from '../components/Login/LoginContainer'

const Login = ({navigation}) => {
  return (
    <View>
      <LoginContainer navigation={navigation}/>
    </View>
  )
}

export default Login