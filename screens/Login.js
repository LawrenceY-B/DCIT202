import React from 'react';
import { StyleSheet,SafeAreaView,StatusBar,Text, View, TextInput,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () =>{
  const navigation = useNavigation();
  return(
      <>
    <View style={styles.container}>
      <Text>ShoppingApp</Text>
      <Image
  source={require('../assets/user.png')}
  style={styles.img}
/>
      
      <Text>User Name</Text>
      <TextInput style={styles.TextIn} placeholder={"Enter Your Username"}/>
      <Text>Password</Text>
      <TextInput style={styles.TextIn} placeholder={"Enter Your Password"} secureTextEntry={true}/>
      <FontAwesome.Button name="chevron-right" backgroundColor="#57A0E4" style={{width:100,paddingHorizontal:22,}} onPress={() => navigation.navigate('Home')}>
        Next
      </FontAwesome.Button>
      <StatusBar style="auto" />
    </View>
    </>
  )};


const styles = StyleSheet.create({
  TextIn:{
    borderWidth:1,
    borderColor:'#57A0E4',
    borderRadius:20,
    padding:10,
    width:200,
  marginBottom:10,
},

  container: {
      flex:1,
    padding:18,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width:100, 
    height: 84,
    borderWidth:1,
    borderColor:'#57A0E4',
    borderRadius:50,
    marginBottom:20,
  }

});
