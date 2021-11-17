import React from 'react';
import {createNativeStackNavigator,} from '@react-navigation/native-stack';
import {HomeScreen} from "../screens/HomeScreen";
import {InfoScreen} from "../screens/productinfo";
import {Products2} from "../components/Products2";


const ProductStack=createNativeStackNavigator();

export const ProductNav =()=> {
return(
    <ProductStack.Navigator>
        <ProductStack.Screen
        name="Home" component={Products2,HomeScreen}
        options={
            ({
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FF6103',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  textTransform:'uppercase',
                  marginHorizontal:155,
                  fontWeight: 'bold',
                },
            })}/>
        <ProductStack.Screen name="ProductDetail" component={InfoScreen}
        options={
            ({
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FF6103',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  textTransform:'uppercase',
                  marginHorizontal:155,
                  fontWeight: 'bold',
                },
            })}
        />
    </ProductStack.Navigator>
)
}