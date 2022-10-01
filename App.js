import React, { useState, useEffect } from 'react';
import { ActivityIndicator ,StyleSheet, Text, View } from 'react-native';
import OnBoarding from './components/OnBoarding/OnBoarding';
import SignIn from './components/SignIn/SignIn';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './components/SignUp/SignUp';
const Stack = createStackNavigator();


const Loading = () => {
  <View>
    <ActivityIndicator />
  </View>
};


export default App = () => { 
  const [loading, setLoading] = useState(true);
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false);


  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnBoarding');

      if (value !== null) {
        setViewedOnBoarding(true); 
      }
    } catch {
      console.log('Error @checkOnBoarding: ', err)
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    checkOnBoarding(); 
  }, []);

  return (

    <NavigationContainer>
      
     <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name="SignIn" component={SignIn}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
     </Stack.Navigator>

    </NavigationContainer>
  );
};


