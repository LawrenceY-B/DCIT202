import React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet,View,Text,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Card} from "react-native-paper";

export const ConstScreen = ({products={}}) =>{
    const navigation = useNavigation();
    const{
        name,image,price,brand,description
    }=products;
   
  return(
  <>
  <View style={styles.container}>
  <Card mode="elevated" elevation={5} style={styles.card} >
    <Card.Cover source={{uri:image}}
    style={styles.cover}/>
    <Card.Content style={{alignItems:'center'}}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.txt2}>${price}</Text>
    </Card.Content>
    <Card.Actions>        
    </Card.Actions>
    </Card>
  </View>

  <View style={{ flex:2,justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart</Text>
      <Button
        title="Checkout" onPress={() => navigation.navigate('Checkout')}
      />
    </View>
 </>
  )
};

    const styles = StyleSheet.create({
        container: {
          padding:13,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'row',
        },
        card: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal:13,
            marginHorizontal:2,
        },
    cover: {
        width:300,
        height:230,
        resizeMode:'contain',
        marginHorizontal:40,
        },
        text:{
            fontSize:40,
            fontWeight:'900',
            textTransform:'capitalize',
        },
      });