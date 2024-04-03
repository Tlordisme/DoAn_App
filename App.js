import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from './src/core/theme'

import TabNavigation from './src/Navigation/TabNavigation'
//import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
//import HomeScreen from './src/screens/HomeScreen/HomeScreen';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
  //   <ClerkProvider 
  //   // tokenCache={tokenCache} 
  //   publishableKey='pk_test_c3BlY2lhbC1wdWctOTMuY2xlcmsuYWNjb3VudHMuZGV2JA'>
  //   {/* Sign In Component */}
  //   <SignedIn>
  //       <NavigationContainer>
  //         <TabNavigation/>
  //       </NavigationContainer>
          
  //   </SignedIn>
  //       {/* Sign Out Component */}
  //   <SignedOut>
  //        <Login/>  
  //   </SignedOut> 
  //  </ClerkProvider>
  <NavigationContainer>
       <TabNavigation/>
   </NavigationContainer>
  );
}





    // <Provider theme={theme}>
    //   <NavigationContainer>
    //     <Home/>
    //   </NavigationContainer>
    // </Provider>