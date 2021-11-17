import React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet, View,} from 'react-native';
import {Products2} from "../components/Products2";


export const HomeScreen = () =>{

  return(
  <>
  <View style={styles.container}>
   <Searchbar placeholder="Search for item"/>
  </View>
  <Products2/>
  
 </>
  )
};

    const styles = StyleSheet.create({
        container: {
          padding:13,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        container2:{
          flex: 1,
          backgroundColor: '#ddd',
        },
      });