import { View, Text,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import Calendar from './Calendar'
import Task from './Task'
import Footer from './footer'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{flex :1, maxHeight: 150}}>
        <Calendar/>
      </View>
        <Task/>
        <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 24,
    justifyContent: "flex-start",
    
  },
});