import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ChatNotification from './ChatNotification'

const ChatContainer = () => {
  return (
    <ScrollView>
      <ChatNotification isUnread/>
      <ChatNotification/>
      <ChatNotification/>
      <ChatNotification/>
    </ScrollView>
  )
}

export default ChatContainer