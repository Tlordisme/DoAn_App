import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Fontisto } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

export default function login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white", alignItems: "center"}}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#0066b2" }}>
          TODO-LIST TRACKER
        </Text>
      </View>
      <KeyboardAvoidingView>
      <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 20 }}>
            Log in to your account
          </Text>
        </View>
        <View>
          <Fontisto name="email" size={24} color="black" />
          <TextInput style= {{color: "gray",marginVertical: 10, width: 300,fontSize: 17,}} placeholder='Enter your email'/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}