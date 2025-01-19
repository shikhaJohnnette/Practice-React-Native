/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React , {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack' ;
import LoginPage from 'src/screens/LoginPage.tsx';
import HomePage from 'src/screens/HomePage.tsx';





// Main App Component
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName = "Login">
    <Stack.Screen name = "Login" component = {LoginPage}/>
    <Stack.Screen name = "Home" component  = {HomePage}/>




   </StackNavigator>
   </NavigationContainer>

  );
};

export default App;
