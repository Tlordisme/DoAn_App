import { View, Text } from 'react-native'
import React from 'react'
import Calendar from './Calendar'
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
      <Calendar/>
    </View>
  )
}