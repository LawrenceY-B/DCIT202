import React  from 'react';
import {Text,StyleSheet,View, TouchableOpacity,FlatList} from 'react-native';
import {Card,Button} from "react-native-paper";

export const ProCard = ({products={}}) =>{
    const{
        name,image,price,brand
    }=products;
    

return(
    <View style={[styles.container, {
        flexDirection: "column"
      }]}>
    <Card mode="elevated" elevation={5} style={styles.card} >
    <Card.Cover source={{uri:image}}
    style={styles.cover}/>
    <Card.Content>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.txt2}>$120</Text>
    </Card.Content>
    <Card.Actions>
        
    <Button color='#57A0E4' mode='outlined' style={styles.btn}>View details</Button>
        
    </Card.Actions>
    </Card>
    
    </View>

)};
const styles = StyleSheet.create({
    container: {
marginTop:5,
    },
    card: {
        alignItems: 'center',
    justifyContent: 'center',
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