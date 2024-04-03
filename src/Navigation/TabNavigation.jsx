import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TaskScreen from '../screens/TaskScreen/Task';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {FontAwesome} from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
//       <Calendar/>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Ngu</Text>
//       <Text>Ngoc</Text>
//     </View>
//   );
// }
// function ProfileScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Profile</Text>
//       </View>
//     );
//   }


export default function Home() {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel:({color}) =>(
              <Text style={{color:color, fontSize:12, justifyContent:'center',marginTop: -7}}>Home</Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}/>
        
        <Tab.Screen name="Task" component={TaskScreen} 
        options={{
            tabBarLabel:({color}) =>(
              <Text style={{color:color, fontSize:12, justifyContent:'center',marginTop: -7}}>Task</Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="tasks" size={size} color={color} />
            )
          }}/>


        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarLabel:({color}) =>(
              <Text style={{color:color, fontSize:12, justifyContent:'center',marginTop: -7}}>Profile</Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}/>

      </Tab.Navigator>
  );
}
