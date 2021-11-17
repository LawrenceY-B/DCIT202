import React from 'react';
import {Text,StyleSheet,View } from 'react-native';
import {Card,Button} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

export const ProCard2 = ({products={}}) =>{
    
    const{
        name,image,price,brand,description
    }=products;
    const navigation = useNavigation();
return(
    <View style={[styles.container, {
        flexDirection: "column"
      }]}>
    <Card mode="elevated" elevation={5} style={styles.card} >
    <Card.Cover source={{uri:image}}
    style={styles.cover}/>
    <Card.Content style={{alignItems:'center'}}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.txt2}>${price}</Text>
    <Text style={styles.txt3}>Brand:{brand}</Text>
    <Text style={styles.txt4}>{description}</Text>
    </Card.Content>
    <Card.Actions>
        
    <Button icon="cart" color='#57A0E4' mode='outlined' style={styles.btn} onPress={() => navigation.navigate('Cart')}>Add to cart</Button>
        
    </Card.Actions>
    </Card>
    
    </View>

)};
const styles = StyleSheet.create({
    container: {
marginTop:5,
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
    txt2: {fontSize:20, fontWeight:'900',color:'#CBEC40', },
    txt3: {fontSize:25, fontWeight:'900',color:'#3B5073', },
    txt4: {fontSize:20, fontWeight:'900',color:'#3B5073', },
    btn:{
        borderColor:'#57A0E4',
        borderWidth:1,
        marginHorizontal:100,
    }
})