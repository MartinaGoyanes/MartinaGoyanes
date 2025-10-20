import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from "../Screens/Home/Home"
import Profile from "../Screens/Profile/Profile"


const Tab = createBottomTabNavigator()

export default function HomeMenu() {
  return (

    
        <Tab.Navigator>
            <Tab.Screen name= "Home" component= {Home} screenOptions={{tabBarShowLabel: false}} options ={
                {tabBarIcon: () => <MaterialCommunityIcons name="font-awesome" size={24} color="black" />}}/>
            <Tab.Screen name= "Profile" component= {Profile} screenOptions={{tabBarShowLabel: false}} options ={
                {tabBarIcon: () => <MaterialCommunityIcons name="font-awesome" size={24} color="black" />}}/>        
        </Tab.Navigator>
   
  );
}
