import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {ProCard2} from "../screens/single";


export const InfoScreen = ({route})=> {
    const{products}=route.params;
    return(
    <ProCard2 products={products} />
    )
}; 