import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StatusBar, SafeAreaView,} from 'react-native';
import {LoginScreen} from "../screens/Login";
import { Ionicons } from '@expo/vector-icons';
import {ProductNav} from './pronav'
import {ConstScreen} from "../screens/Cart";

function Cartscreen() {
  return (
    <ConstScreen/>
  );
}
function LScreen() {
  return (
      <LoginScreen/>
  );
}

const Tab = createBottomTabNavigator();
export const AppNav =()=> (
    <> 
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
    <ExpoStatusBar style="auto" />
    
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Cart') {
          iconName = focused ? 'ios-cart' : 'ios-cart-outline';
        }else if (route.name === 'Login') {
          iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      
      tabBarActiveTintColor: '#FF6103',
      tabBarInactiveTintColor: 'black',
        headerStyle: {
        backgroundColor: '#FF6103',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          textTransform:'uppercase',
          marginHorizontal:155,
          fontWeight: 'bold',
        },
      
      
    })}>
      
      <Tab.Screen name="Login" component={LScreen} />
      <Tab.Screen 
      name="Home" component={ProductNav} options={
        ({
          headerShown: false,
        })}/>
        <Tab.Screen name="Cart" component={Cartscreen} />
     
    </Tab.Navigator>
  </NavigationContainer>
  </SafeAreaView>
  </>
  );



