import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from './../../Utils/Colors'
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from './../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
    try {
        const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

        if (createdSessionId) {
        setActive({ session: createdSessionId });
        } else {
        // Use signIn or signUp for next steps such as MFA
        }
    } catch (err) {
        console.error("OAuth error", err);
    }
    }, []);
    return (
        <View style ={{alignItems: 'center', justifyContent:'center'}}>
            <Image source ={require('./../../assets/GetinStarted.png')} 
            style={styles.loginImage}/>
            <View style= {styles.subContainer}>
                <Text style={{fontSize:26, color: Colors.WHITE, textAlign: 'center'}}>
                    Let's make your  
                    <Text style={{fontWeight:'bold'}}> TodoList
                    </Text> for lively days
                </Text>
                <Text></Text>
                <TouchableOpacity style= {styles.button} onPress={onPress}>
                    <Text style={{textAlign:'center', fontSize:17, 
                    color: Colors.PRIMARY}}>Let's Get Started</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  loginImage:{
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth:4,
    borderRadius: 15

  },
  subContainer:{
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '40%',
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
        justifyContent:'center'

  },
  button:{
    padding:15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
  }
})

