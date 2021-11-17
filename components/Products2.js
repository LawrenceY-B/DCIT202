import React, {useState,useEffect}  from 'react';
import {Text,StyleSheet,View, TouchableOpacity,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ProCard} from "../screens/procard"


export const Products2 = () =>{
    const data = require('../assets/products.json');
    const [products, setProducts]=useState([]);
    
    useEffect(()=>{
        setProducts(data);
    
        return()=>{
            setProducts([])
        }
    },[])
   
    const navigation = useNavigation();

return(<>
<FlatList
  data={products}
  renderItem={({item})=>{
      
    return(
        <TouchableOpacity onPress={() =>navigation.navigate('ProductDetail',{products:item,})}>
    <ProCard products={item}/>
    </TouchableOpacity>
);
}}
  keyExtractor={(item) => item.name}
  contentContainerStyle={{paddingHorizontal:1,}}
  />
   
</>
);}

const styles = StyleSheet.create({
    container: {
marginTop:5,
    },
    card: {
        backgroundColor: '#fff',

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
        fontSize:20,
        fontWeight:'900',
        textTransform:'capitalize',
    },
    txt2: {fontSize:16, fontWeight:'300', },
    btn:{
        borderColor:'#57A0E4',
        borderWidth:1,
        marginHorizontal:100,
    }
})
